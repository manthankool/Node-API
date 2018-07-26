var {mongoose} = require('./db/mongoose');    //es6 object destructuring
var {Todo} = require('./models/todo');
var {User}= require('./models/users');
var {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();



app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var newTodo=new Todo({
    text:req.body.text,

  });

  newTodo.save().then((doc) => {
    res.status(200).send(doc);
  },(err) => {
    res.status(400).send(err);
  });                   //body is stored by bodyParser
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});

  },(e) => {
    res.status(400).send(e);
  });
});


app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(400).send('id is not valid');
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(400).send();
    }

    return res.status(200).send({todo});
  }).catch((e) => res.status(400).send());
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

module.exports = {app};
