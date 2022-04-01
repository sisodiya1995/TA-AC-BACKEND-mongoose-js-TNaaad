var express = require('express');
var app = express();
var mongoose = require('mongoose')
//var schema = mongoose.Schema
var User = require('./modals/user')

//connect to the data base
mongoose.connect("mongodb://localhost:27017/sample" ,(err) => {
    console.log(err ?  err :"connect to database")
})
//miiddleware
app.use(express.json())

//routes

//create 
app.post('/users' ,(req ,res) => {
  User.create(req.body ,(err , user) => {
      console.log(err ,user);
      res.json(user);
  })
  
})

//read
app.get('/users' ,(req ,res) => {
    User.find({} ,(err , users) => {
        console.log(err ,users);
        res.json({users : users});
    })
    
  })

  app.get('/users/:id' ,(req ,res) => {
      var id = req.params.id
    User.findById(id,(err , users) => {
        console.log(err ,users);
        res.json({users : users});
    })
    
  })

  app.get('/users' ,(req ,res) => {

  User.findOne({_id :"62468c24ecd386b650aa5464"},(err , users) => {
      console.log(err ,users);
      res.send(users);
  })
  
})

//update

app.put('/users/:id' ,(req ,res) => {
    var id = req.params.id
  User.findByIdAndUpdate(id,req.body,{new:true},(err , updateusers) => {
      console.log(err ,updateusers);
      res.json(updateusers);
  })
  
})

app.put('/users' ,(req ,res) => {
    
  User.findByIdAndUpdate({_id :"62468c24ecd386b650aa5464"},req.body,{new:true},(err , updateusers) => {
      console.log(err ,updateusers);
      res.json(updateusers);
  })
  
})

//delete
app.delete('/users/:id' ,(req ,res) => {
    var id = req.params.id
  User.findByIdAndDelete(id,req.body,(err , deleteusers) => {
      console.log(err ,deleteusers);
      res.json(`delete user name is ${deleteusers.name}`);
  })
  
})

app.listen(5555 ,() => {
    console.log('server listioning on port 5555')
});
