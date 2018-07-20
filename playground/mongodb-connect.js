// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name:'manthan',age:22};
var {name}=user;         //es6 object destructuring
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');   //return is used to avoid running the code after getting the error
  }
  console.log('Connected to mongodb server');

  db.collection('Todos').insertOne({
    text:'Maine randi ko choda',
    completed: false

  },(err,result) => {
    if(err){
      return console.log('Unable to insert to todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined , 2));

  });    //to add data we use db.collection with the name of collection and insertOne will allow you to insert new document into your collection


  // db.collection('Users').insertOne({
  //   name:'Manthan',
  //   age:22,
  //   location:'Jaipur'
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to insert data',err);
  //   }
  //   console.log(result.ops);
  // });
  //
  db.close();


});            //to connect to the db , It will take 2 arguements i.e. first is db url and second is callback func. 'db' is used to read and write the data
