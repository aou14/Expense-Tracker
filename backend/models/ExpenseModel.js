const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Amount: {
        type: Number,
        required: true,
        trim: true
    },
    Date: {
        type: Date,
        required: true,
        trim: true
    },
    Category: {
        type: String,
        required: true,
        trim: true
    }
})

