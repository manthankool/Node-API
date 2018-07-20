// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');   //object destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');   //return is used to avoid running the code after getting the error
  }
  console.log('Connected to mongodb server');

  //ManyDelete

  // db.collection('Todos').deleteMany({text:'aaj gym gaya tha'}).then((result) => {
  //
  //
  //   console.log(result);
  // },(err) => {
  //
  //   console.log('Unable to delete',err);
  //
  // });


  //OneDelete

  // db.collection('Todos').deleteOne({text:'aaj gym gaya tha'}).then((result) => {
  //   console.log(result);
  //
  // }, (err) => {
  //
  //   console.log('UNable to delete',err);
  // });



  //findOneAndDelete

  //
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log(err);
  // });
  //

// db.collection('Users').deleteMany({location:'Jaipur'})

  db.collection('Users').findOneAndDelete({_id:new ObjectID("5b5242cdb761b9b1b8e7d6fd")}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete',err);
  });

// db.close();


});            //to connect to the db , It will take 2 arguements i.e. first is db url and second is callback func. 'db' is used to read and write the data
