var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name :{type : String} ,
    email :{type : String} ,
    sports :[String]
})

var User = mongoose.model('User' , userSchema)

module.exports = User;