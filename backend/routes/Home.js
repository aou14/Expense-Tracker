const express = require('express');

const {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense,
    updateExpense
} = require('../controllers/expense')

const {
    getIncome,
    createIncome,
    deleteIncome,
    updateIncome
} = require('../controllers/income')

const router = express.Router();

// GET all expenses
router.get('/expense', getExpenses)

// GET an expense
router.get('/expense/:id', getExpense)

// CREATE/POST a new expense
router.post('/expense', createExpense)

// DELETE an expense
router.delete('/expense/:id', deleteExpense)

// UPDATE/PATCH an expense
router.patch('/expense/:id', updateExpense)

// GET income
router.get('/income', getIncome)

// POST new income
router.post('/income/:id', createIncome)

// DELETE an income
router.delete('/income/:id', deleteIncome)

// UPDATE/PATCH an income
router.patch('/income/:id', updateIncome)

module.exports = router