var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    name : String ,
    email : {type : String ,lowercase : true},
    age : {type : Number , defaults : 0},
    password :{type : String ,minlength : 5} ,
    createdAt :{type : Date , defaults : new Date()},
    favourite : [String]
}
,{timestamps :true}
)

module.exports = mongoose.Model('User' ,userSchema)