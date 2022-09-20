// const express = require('express')
import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './routes/users.js'

const app = express()
app.use(bodyParser.json())
app.use('/user', userRouter)

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
