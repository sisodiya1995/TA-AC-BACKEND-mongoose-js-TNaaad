var mongooes = require('mongoose');
var schema = mongooes.Schema;

var userSchema = new Schema({
    passoward : {type : String , min : 5 , max : 15},
    createdAt : {type : Date , default : Date.now()} 
})