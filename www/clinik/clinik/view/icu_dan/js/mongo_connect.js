
var mongoose = require('mongoose');

// This lines are only for connecting to mongodb
// and a special db.

mongoose.connect('mongodb://localhost/HIS');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to mongo");
});

