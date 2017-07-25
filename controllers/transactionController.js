const Transactions = require('../models/transactionModel');
const Books = require('../models/bookModel')

function createTransaction(req, res) {
  let due = new Date();
  due.setDate(due.getDate() + parseInt(req.body.days));
  Transactions.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: due,
    booklist: req.body.booklist
    // in_date dan fine ketika buku dikembalikan (updateTransaction)
  },(err, result) => {
    if (err) {
      res.send(err.message);
    }
    console.log("Create Transaction Succes");
    console.log(result);
    res.send(result);
  });
}

function getAllTransactions(req,res) {
  Transactions.find({}).populate('booklist')
  .then( (err,transaction) => {
    if(err) res.status(500).send(err)
    res.send(transaction);
  })
}

function getOneTransaction(req,res) {
  let id = req.params.id
  Transactions.findById(id).populate('booklist')
  .then( (err,transaction) => {
    if(err) res.send(err)
    console.log(transaction);
    res.send(transaction)
  })
}

function updateTransaction(req,res) {
  let id = req.params.id;
  Transactions.findById(id, (err,transaction) => {
    if(err) res.send(err)
    transaction.in_date = new Date();
    if(transaction.in_date > transaction.due_date) {
      let hasil = Math.round((transaction.due_date - transaction.in_date)/ (1000*24*3600))
      console.log(hasil);
      let bookCount = transaction.booklist.length * 500;
      transaction.fine = hasil * bookCount;
    } else {
      transaction.fine = 0
    }
    transaction.save( (err) => {
      if(err) res.send(err)
      res.send(transaction)
    })
  })
}

module.exports = {
  createTransaction, getOneTransaction, getAllTransactions, updateTransaction
}
