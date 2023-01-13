const express = require("express");
const bodyParser = require("body-parser");
const {
  listBooks,
  createBooks,
  updateBooks,
  deleteBooks,
} = require("./controllers");

const server = express();

server.use(bodyParser.json());

server.get("/book", listBooks);
server.post("/book", createBooks);
server.put("/book", updateBooks);
server.delete("/book", deleteBooks);

server.listen(5000, () => {
  console.log("Server Ready!");
});
