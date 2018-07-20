// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');   //object destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');   //return is used to avoid running the code after getting the error
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find().toArray().then((docs) => {
  //
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err) => {
  //
  //   console.log('Unable to fetch todos',err);
  // });             //find will return a pointer to those docs and that pointer has methods which can be used to extract the document


  // db.collection('Todos').find().count().then((count) => {
  //
  //   console.log('Todos count :',count);
  //
  //
  // }, (err) => {
  //
  //   console.log('Unable to fetch todos',err);
  // });             //find will return a pointer to those docs and that pointer has methods which can be used to extract the document

  db.collection('Users').find({name:'Koolwal'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));

  }, (err) => {
    console.log('Unable to fetch todos',err);

  });

  db.close();


});            //to connect to the db , It will take 2 arguements i.e. first is db url and second is callback func. 'db' is used to read and write the data
