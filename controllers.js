const BookModel = require("./model");

//fetch books
const listBooks = (req, res) => {
  const { id } = req.params;

  if (id) {
    BookModel.find({ _id: id })
      .then((books) => {
        res.json({ data: books });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    BookModel.find()
      .then((books) => {
        res.json({ data: books });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//create books
const createBooks = (req, res) => {
  const { title, author, description } = req.body;

  const book = new BookModel({
    title,
    author,
    description,
  });

  book
    .save()
    .then((result) => {
      res.json({ message: "book created successfully", data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update books
// const updateBooks = (req, res) => {
//   const { title, author, description } = req.body;

//   const updatedBook = BookModel.update({
//     title,
//     author,
//     description,
//   });

//   res.json({ message: "book updated successfully", data: updatedBook });
// };

//delete books
// const deleteBooks = (req, res) => {
//   const { title } = req.body;
//   const deletedBook = BookModel.delete({ title });
//   res.json({ message: "Book deleted!", data: deletedBook });
// };

module.exports = { listBooks, createBooks };
