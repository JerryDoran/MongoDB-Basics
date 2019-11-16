const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const BookSchema = new Schema({
  title: String,
  pages: Number
});

// Create Schema and Model
const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

const Author = mongoose.model('Author', AuthorSchema);

// Make the Author model available globally to this project
module.exports = Author;
