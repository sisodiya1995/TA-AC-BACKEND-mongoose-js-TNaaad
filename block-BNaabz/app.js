
// require 

var express = require('express');
var mongooes = require('mongoose');

var app = express();
//connect to the database

mongooes.connect("mongodb://127.0.0.1:27017/test" ,(err) =>{
    console.log(err ? err : "connected to the database")
})

app.listen(6000 , () => {
    console.log("server listioning on port 6k")
})