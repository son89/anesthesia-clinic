
var mongoose = require('mongoose');

// making schemas for inserting data in mongo

var his_schema = mongoose.Schema({
    name: String,
    last_name: String,
    personal_id: String,
    file_number: Number,
    sex: Boolean,
    birth_year: Number,
    birth_month: Number,
    birth_day: Number,
    height: Number,
    width: Number,
    answer: Number,
    assent_year: Number,
    assent_month: Number,
    assent_day: Number,
    assent_time: Array,
    ans_year: Number,
    ans_month: Number,
    ans_day: Number,
    ans_time_min: Number,
    ans_time_hour: Number
});

module.exports = (function(){
    var _return = {};
    _return.his = mongoose.model('his', his_schema);
    return _return ;
})();

