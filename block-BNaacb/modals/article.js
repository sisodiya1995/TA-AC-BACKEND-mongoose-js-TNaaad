var mongooes = require('mongoose');
var schema = mongooes.Schema;

var articleSchema = new Schema({
    id : Number,
    description : String ,
    name : String
    
})