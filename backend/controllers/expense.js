const mongoose = require('mongoose')

// GET all expenses
const getExpenses = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
}

// GET an expense
const getExpense = async (req, res) => {

}

// CREATE/POST a new expense
const createExpense = () => {

}

// DELETE an expense
const deleteExpense = () => {

}

// UPDATE/PATCH an expense
const updateExpense = () => {

}