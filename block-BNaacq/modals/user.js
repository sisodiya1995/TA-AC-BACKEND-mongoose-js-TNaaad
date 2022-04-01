var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name : String ,
    email : String ,
    age : Number
},{timestamps :true})

module.exports = userSchema;
var User = mongoose.modal('User' ,userSchema);