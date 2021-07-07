const express = require('express');
const router = express.Router();
const todoTasks = require('../services/todoTasks');

/* GET todos. */
router.get('/todo', async function(req, res, next) {
    console.log('GET request /api/todo received');

    try {
        const result = await todoTasks.getTodoTasks();

        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/todo/save', async function(req, res, next) {
    console.log('POST request /api/todo/save received with parameters: ' + JSON.stringify(req.body));

    try {
        const result = await todoTasks.save(req.body);

        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});


router.post('/todo/deleted', async function(req, res, next) {
    console.log('POST request /api/todo/deleted received with parameters: ' + JSON.stringify(req.body));

    try {
        const result1 = await todoTasks.deleted(req.body);

        res.json(result1);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;