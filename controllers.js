const BookModel = require("./model");

//fetch books
const listBooks = (req, res) => {
  const books = BookModel.all();
  res.json({ data: books });
};

//create books
const createBooks = (req, res) => {
  const { title, author, description } = req.body;

  const book = new BookModel({
    title,
    author,
    description,
  });

  book.save();

  res.json({ message: "book created successfully", data: book });
};

//update books
const updateBooks = (req, res) => {
  const { title, author, description } = req.body;

  const updatedBook = BookModel.update({
    title,
    author,
    description,
  });

  res.json({ message: "book updated successfully", data: updatedBook });
};

//delete books
const deleteBooks = (req, res) => {
  const { title } = req.body;
  const deletedBook = BookModel.delete({ title });
  res.json({ message: "Book deleted!", data: deletedBook });
};

module.exports = { listBooks, createBooks, updateBooks, deleteBooks };
