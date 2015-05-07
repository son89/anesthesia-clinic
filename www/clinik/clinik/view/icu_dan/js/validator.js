
var valid = require ('validator');
var db = require('./mongo_schemas');
// todo : validate if a user.mobile is existed for other user or not && many other things
var this_year = new Date().getFullYear()-714 ; // 93 year later
var that_year = new Date().getFullYear()-631 ; // 10 year later

module.exports = (function(){
    var _return = {};
    _return.email = function(email ,callback){
        if(callback) callback(valid.isEmail(email));
    };

    _return.mobile = function(mobile ,/* database_check,*/callback){

//        if (database_check){
//            db.contacts.findOne({} ,function())// todo : write findOne to check if mobile number is used or not
//        } else {
            callback(valid.isNumeric(mobile) && valid.isLength(mobile, 10, 11)/* ,null*/);
//        }
    };

    _return.password = function(password ,password2 ,callback){
        if (valid.isLength(password, 6, 20) && ( password == password2 )){
            if(callback) callback(true);
        } else {
            if(callback) callback(false);
        }
    };

    _return.first_name = function(first_name ,callback){
        if(callback) callback(valid.isLength(first_name, 2, 25));
    };

    _return.last_name = function(last_name ,callback){
        if(callback) callback(valid.isLength(last_name, 2, 35));
    };

    _return.birth_year = function(birth_year ,callback){
        var small = new Date().getFullYear()-714 ; // 93 year later
        var big = new Date().getFullYear()-631 ; // 10 year later

        if(callback) {
            if(valid.isLength(birth_year,4 ,4 )){
                if((birth_year > small) && (birth_year < big)){
                    callback(true);
                } else {
                    callback(false);
                }
            } else {
                callback(false);
            }
        }
    };

    _return.all = function(email ,mobile ,password ,password2 ,first_name
        ,last_name ,birth_year ,callback){
        var ok = true ;
        var v = {
            email : true ,
            mobile : true ,
            password : true ,
            first_name : true ,
            last_name : true ,
            birth_year : true
        };

        _return.email(email ,function(res){
            if (!res){
                ok = false ;
                v.email = false ;
            }
        });

        _return.mobile(mobile ,function(res){
            if (!res){
                ok = false ;
                v.mobile = false ;
            }
        });

        _return.password(password, password2 ,function(res){
            if (!res){
                ok = false ;
                v.password = false ;
            }
        });

        _return.first_name(first_name ,function(res){
            if (!res){
                ok = false ;
                v.first_name = false ;
            }
        });

        _return.last_name(last_name ,function(res){
            if (!res){
                ok = false ;
                v.last_name = false ;
            }
        });

        _return.birth_year(birth_year ,function(res){
            if (!res){
                ok = false ;
                v.birth_year = false ;
            }
        });

        if (callback) callback(ok ,v);
    };

    return _return ;
})();

//