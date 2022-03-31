var mongooes = require('mongoose');
var schema = mongooes.Schema;

var userSchema = new Schema({
    passoward : {type : String , minlength : 5 , maxlength : 15},
    createdAt : {type : Date , default : new Date()} 
})

var User = mongooes.model('User' , userSchema)
module.exports = User;