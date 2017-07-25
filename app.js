const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      //index = require('.routes/index'),
      books = require('./routes/api/books'),
      transactions = require('./routes/api/transactions'),
      customers = require('./routes/api/customers'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jumadi-mongoose-crud')
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected Succes');
})

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions);

app.listen(3000, () => console.log('Listening Port 3000'));
