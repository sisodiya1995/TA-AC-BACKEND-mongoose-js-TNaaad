var mongoose = require('mongoose');
var schema = mongoose.Schema;

var commentSchema = new schema({
    content : String ,
    author : schema.types.objectid ,
    age : Number
},{timestamps :true})

module.exports = commentSchema;
var Comment = mongoose.modal('Comment' ,commentSchema);