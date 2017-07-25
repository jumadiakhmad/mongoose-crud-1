const express = require('express');
const router = express.Router();
const transactionController = require('../../controllers/transactionController');

router.get('/', transactionController.getAllTransactions);
router.get('/:id', transactionController.getOneTransaction);
router.post('/', transactionController.createTransaction);
router.put('/:id', transactionController.updateTransaction);
module.exports = router;
