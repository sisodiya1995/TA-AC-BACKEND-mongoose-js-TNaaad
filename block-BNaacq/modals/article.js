var mongoose = require('mongoose');
var schema = mongoose.Schema;

var articleSchema = new schema({
    title : String ,
    description : String ,
    tags :[string] ,
    likes : Number ,
    Comment : Number ,
    author :schema.types.objectId
},{timestamps :true})

module.exports = articleSchema
var Article = mongoose.modal('Article' ,articleSchema);  