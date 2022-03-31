var mongoose = require('mongoose');
var schema = mongoose.Schema;

var articleSchema = new Schema({
    title : String ,
    description : String ,
    tags : [String] ,
    createdAt : {type : Date , defaults : new Date()} ,
    likes : {type : Number , defaults : 0}
})

module.exports = mongoose.Model('Article' ,articleSchema)