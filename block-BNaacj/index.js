var express = require('express');
var mongooes = require('mongoose');

var app = express();
//connect to the database

mongooes.connect("mongodb://localhost:27017/test" ,(err) =>{
    console.log(err ? err : "connected to the database")
})

app.listen(7000 , () => {
    console.log("server listioning on port 7k")
})