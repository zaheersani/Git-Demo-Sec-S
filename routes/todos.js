import express from 'express';

// const express = require('express');
const router = express.Router();

const todos = [
    {
        name: 'John Doe',
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send(todos)
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Item added into the DB`)
})

export default router;

// module.exports = router;