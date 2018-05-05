// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db();

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5ae971bb9fa2722c886b1964')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5ae97e389fa2722c886b1c15')
  }, {
    $set: {
      name: 'Tahsin Amio'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  })

  // client.close();
});
