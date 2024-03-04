require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Home = require('./routes/Home')


const app = express()

app.use(express.json)

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/tracker', Home);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Database connected & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })