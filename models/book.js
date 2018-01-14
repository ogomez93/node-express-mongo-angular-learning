var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
}

// Get Book
module.exports.getBookById = function(id, callback) {
  Book.findById(id, callback);
}

// Add Book
module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback) {
  var query = {_id: id};
  var { title, genre, description, author, publisher, pages, image_url, buy_url } = book;
  var update = {
    title,
    genre,
    description,
    author,
    publisher,
    pages,
    image_url,
    buy_url
  };
  Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.deleteBook = function(id, callback) {
  var query = {_id: id};
  Book.remove(query, callback);
}