const Books = require('../models/bookModel');

function createBook(req,res) {
  Books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, (err, books) => {
      if(err) res.status(500).send(err)
      console.log(books);
      res.status(500).send(books)
    })
}

function getAllBooks(req,res) {
  Books.find( (err, books) => {
    if(err) res.status(500).send(err)
    res.status(500).send(books)
  })
}

function getOneBook(req,res) {
  let id = req.params.id;
  Books.findById(id, (err,book) => {
    if(err) res.status(500).send(err)
    res.status(500).send(book)
  })
}

function updateBook(req,res) {
    Books.update({
      _id: req.params.id
    }, {
      $set: {
        isbn: req.body.isbn,
        title: req.body.title ,
        author: req.body.author ,
        category: req.body.category,
        stock: req.body.stock
      }
    }, (err,result) => {
      if(err) res.status(500).send(err)
      console.log('Update Data Success');
      res.send(result);
    })
}

function deleteBook(req,res) {
  Books.remove({
    _id: req.params.id
  }, (err,book) => {
    if(err) res.status(500).send(err)
    console.log('Delete Books Succes');
    res.send(book)
  })

}
module.exports = { createBook, getAllBooks, getOneBook,
  updateBook, deleteBook
}
