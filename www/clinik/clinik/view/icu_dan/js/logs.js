
var fs = require('fs');

// todo : logger should work with sessions, not like this.

fs.appendFileSync('logs' ,
    "------------------------------------------------------------------\n" );
fs.appendFileSync('logs' , " * Server start at : { " + Date() + " }\n" );

var visit = 0 ;
var root_logger = function(ip){
    fs.appendFileSync('logs' ," visitor : { " + ++visit +
        " } / route : { / } / ip : " + ip + " / Date : { " + Date() + " }\n");
};

module.exports.root_logger = root_logger ;
