var db = require('./mongo_schemas');

db.contacts.find({},{_id : false } ,function(err ,data){
    for( var index in data ){
        console.log( JSON.stringify(data[index] ,null ,"   "));
    }
});
//