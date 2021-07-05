const express = require('express');
const router = express.Router();
const todoTasks = require('../services/todoTasks');

/* GET programming languages. */
router.get('/todo', async function(req, res, next) {
    console.log('Request received');


    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
        res.json(await todoTasks.getTodoTasks());
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;