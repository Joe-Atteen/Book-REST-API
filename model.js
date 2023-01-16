const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
});

const BookModel = mongoose.model("Book", BookSchema);

// class BookModel {
//   constructor({ title, author, description }) {
//     this.title = title;
//     this.author = author;
//     this.description = description;
//   }

//   save() {
//     booksDb.push(this);
//     return this;
//   }

//   static all() {
//     return booksDb;
//   }

//   static update(updatedInfo = {}) {
//     booksDb = booksDb.map((book) => {
//       if (book.title === updatedInfo.title) {
//         return { ...book, ...updatedInfo };
//       }
//       return book;
//     });
//   }

//   static delete({ title }) {
//     let deletedBook = null;
//     booksDb = booksDb.filter((book) => {
//       if (book.title !== title) {
//         return true;
//       }
//       deletedBook = book;
//       return false;
//     });
//     return deletedBook;
//   }
// }

module.exports = BookModel;
