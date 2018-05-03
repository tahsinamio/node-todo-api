// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db();


  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
  //   console.log(result.value.text);
  // })

  // db.collection('Users').deleteMany({name: 'Tahsin Amio'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ae97e4f9fa2722c886b1c21")}).then((result) => {
    console.log(`Deleted ${result.value.name}`);
  })


  // client.close();
});
