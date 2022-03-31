var express = require('express');
var mongoose = require('mongoose')
var app = express();

//connect to the database
mongoose.connect("mongodb://localhost:27017/test" ,(err) =>{
    console.log(err ? err : "connected to the database")
})

app.listen(6000 ,() =>{
    console.log('server listioning on port 6k')
})