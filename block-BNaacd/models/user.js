var mongooes = require('mongoose');
var schema = mongooes.Schema;

var userSchema = new Schema({
    age : {type : Number , default : 0},
    email : {type : String ,lowercase : true} ,
    name : {type : String}
    
})