var mongooes = require('mongoose');
var schema = mongooes.Schema;

var userSchema = new Schema({
    marks : [Number] ,
    name : [String]
    
})

var addressSchema = new Schema({
    village : String ,
    city : String ,
    state : String ,
    pin :  Number ,
    user : schema.Types.ObjectId
})