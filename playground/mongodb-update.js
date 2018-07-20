// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');   //object destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');   //return is used to avoid running the code after getting the error
  }
  console.log('Connected to mongodb server');

  //findOneAndUpdate
  //
  // db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5b524039b761b9b1b8e7d5ac")},
  // {
  //   $set:{
  //     completed:false
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) => {
  //
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID("5b524a17b761b9b1b8e7d9b0")},
  {
    $set:{
      location:'Jaipur'
    },
    $inc:{
      age:1
    }

  }, {
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });
// db.close();


});            //to connect to the db , It will take 2 arguements i.e. first is db url and second is callback func. 'db' is used to read and write the data
