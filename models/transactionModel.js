const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  out_date: {
    type: Date,
    required: true
  },
  due_date: {
    type: Date
  },
  in_date: Date,
  fine: String,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books'}]
})

var Transaction = mongoose.model('transactions', transactionSchema);
module.exports = Transaction;
