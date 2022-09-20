import express from 'express';

// const express = require('express');
const router = express.Router();

const users = [
    {
        name: 'John Doe',
        age: 25
    },
    {
        name: 'David',
        age: 35
    }
]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send(`added into the DB`)
})

export default router;

// module.exports = router;