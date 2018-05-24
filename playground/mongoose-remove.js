const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


Todo.findByIdAndRemove('5b066d3c93d5951feae02d76').then((todo) => {
  console.log(todo);
});
