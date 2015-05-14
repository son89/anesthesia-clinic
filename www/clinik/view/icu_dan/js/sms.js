
var http = require('http');
var querystring = require("querystring");

/* this is an API and should use in other files like this

 var sms = require(./sms);

 sms.send({ message : string , sender : string , receptor : string } ,function(send ,status){
      do stuff
 });
 sms.status({ messageid : number } ,function(status){
      do stuff
 });

 for read about what are returned data and more : http://kavenegar.com/rest.html

 */

//-----------------------------------------------------------------------------
// Variables
var myconst = {
    apikey : global.apikey || "apikey" ,
    apipath : "/v1/{apikey}/{domain}/{method}.json"
};

var utils = new Object();
var methods = new Object();
//-----------------------------------------------------------------------------
// Utils Section
utils.api = new Object();
utils.api.getApiPath = function(domain,method){
    var result= myconst.apipath;
    result=result.replace("{apikey}",myconst.apikey);
    result=result.replace("{domain}",domain);
    result=result.replace("{method}",method);
    return result ;
};
utils.rest = new Object();
utils.rest.doPost = function  (url,params,callback) {
    var post_data = querystring.stringify(params);
    var post_options = {
        host: 'api.kavenegar.com',
        port: '80',
        path: url ,
        method: 'POST' ,
        headers : {
            'Content-Length': post_data.length,
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };
    console.log("Request sent! -> http://" + post_options.host + url);

    var req = http.request(post_options,function(e){
        e.setEncoding('utf8');
        e.on('data', function(chunk){
            if (callback) callback(chunk);
        });
    });

    req.write(post_data,"utf8");
    req.on("error",function(e) {
        console.log('problem with request: ' + e.message);
    });
    req.end();
};
//---------------------------------------------------------------------------
//Methods

module.exports = (function(){
    var _return = {} ;
    _return.send = function(model,callback) {
        utils.rest.doPost(utils.api.getApiPath("sms","send"), model , function(result) {
            result = JSON.parse(result);
            if (result.return.status == 200) {
                _return.status({ messageid : result.entries[0].messageid } ,function(status){
                    if (callback) callback(result ,status);
                });  // check for delivery
            } else if (callback) {
                callback(result);
            }
        });
    };

    _return.status = function(massageid ,callback) {
        utils.rest.doPost(utils.api.getApiPath("sms","status"), massageid , function(result) {
            result = JSON.parse(result);
            if (callback) callback(result);
        });
    };

    _return.selectlatest = function(pagesize ,callback) {
        utils.rest.doPost(utils.api.getApiPath("sms","selectlatest"), pagesize , function(result) {
            result = JSON.parse(result);
            if (callback) callback(result);
        });
    };

    _return.account_info = function(callback) {
        utils.rest.doPost(utils.api.getApiPath("account","info") , function(result) {
            result = JSON.parse(result);
            if (callback) callback(result);
        });
    };

    return _return ;
})();


