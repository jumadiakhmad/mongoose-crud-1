const Customers = require('../models/customerModel');
const Transactions = require('../models/transactionModel');

function createCustomer(req,res) {
  Customers.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, (err,customer) => {
    if(err) res.send(err)
    res.send(customer)
  })
}

function getAllCustomers(req,res) {
  Customers.find({}, (err,result) => {
    if(err) res.status(500).send(err)
    console.log(result);
    res.send(result);
  })
}

function getOneCustomer(req,res) {
  let id = req.params.id
  Customers.findById(id, (err,customer) => {
    if(err) res.status(500).send(err)
    res.send(customer)
  })
}

function updateCustomer(req,res) {
  Customers.find({
    _id: req.params.id
  }, (err,result) => {
    Customers.update({
      _id: result[0]._id
    }, {
      $set: {
        name: req.body.name || result[0].name,
        memberid: req.body.memberid || result[0].memberid,
        address: req.body.address || result[0].address,
        zipcode: req.body.zipcode || result[0].zipcode,
        phone: req.body.phone || result[0].phone
      }
    }, (err,result) => {
      if(err) res.send(err)
      console.log('Update Data Customers Succes');
      res.send(result)
    })
  })
}

function deleteCustomer(req,res) {
  Customers.remove({
    _id: req.params.id
  }, (err,result) => {
    if(err) res.status(500).send(err)
    console.log('Delete Data Customer Success');
    res.send(result)
  })
}

module.exports = {
  createCustomer, getAllCustomers, getOneCustomer,
  updateCustomer, deleteCustomer
}
