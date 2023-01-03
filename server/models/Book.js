const { Schema } = require('mongoose');


const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  
});

module.exports = bookSchema;
