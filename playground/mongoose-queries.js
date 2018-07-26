const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/users');

// var id ="b58e05ad3df285748929552";
var id = "5b530b2d6a79ae30e88d5729";

if(!ObjectID.isValid(id)){
  return console.log('id is not valid');
}
// if(!ObjectID.isValid(id)){
//   return console.log('id is not valid')
// }
//
// Todo.find({
//   _id: id           //we are passing string as the value , mongoose is going to take that string and it is going to convert it to object id. We don't need to covert string to object id manually.
//
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log(todo);
// });
//
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));


User.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found')
  }
  console.log(JSON.stringify(todo,undefined,2));
}).catch((e) => console.log(e));
