var {mongoose} = require('./db/mongoose');    //es6 object destructuring
var {Todo}= require('./models/todo');
var {User}= require('./models/users');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var newTodo=new Todo({
    text:req.body.text
  });

  newTodo.save().then((doc) => {
    res.send(doc);
  },(err) => {
    res.send(err);
  });                   //body is stored by bodyParser
});

app.listen(3000, () => {
  console.log('Started on PORT 3000');
});


// var newTodo = new Todo({
//   email:'manthankoolwal2450@gmail.com    '
//
// });
//
// newTodo.save().then((docs) => {
//   console.log('Saved to database',docs);
// },(err) => {
//   console.log('Unable to save it to database');
// });
