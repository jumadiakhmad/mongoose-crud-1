const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  memberid: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})

var Customer = mongoose.model('customers', customerSchema);
module.exports = Customer;
