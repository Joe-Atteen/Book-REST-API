const express = require("express");
const bodyParser = require("body-parser");
const {
  listBooks,
  createBooks,
  updateBooks,
  deleteBooks,
} = require("./controllers");
const mongoose = require("mongoose");

const server = express();

server.use(bodyParser.json());

server.get("/book/:id?", listBooks);
server.post("/book", createBooks);
// server.put("/book", updateBooks);
// server.delete("/book", deleteBooks);

mongoose
  .connect(
    "mongodb+srv://some-user:aaaaaaaa@cluster0.yyqqvi7.mongodb.net/BooksDB?retryWrites=true&w=majority"
  )
  .then((res) => {
    server.listen(5000, () => {
      console.log("Server Ready!");
    });
  })
  .catch((err) => console.log(err));
