
var bcrypt = require('bcrypt');

module.exports = (function(){
    var _return = {};

    _return.hash = function(word ,callback){
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(word, salt, function(err, hash) {
                if (err) throw err ;

                if (callback) callback(hash);
            });
        });
    };

    _return.compare = function(word ,hash ,callback){
        bcrypt.compare(word, hash, function(err, res) {
            if(err) throw err ;
            if(callback) callback(res);
        });
    };

    return _return ;
})();
