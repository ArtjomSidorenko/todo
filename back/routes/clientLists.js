import clientList from "../../front/src/views/clientList";

const express = require('express');
const router = express.Router();
const clientList = require('../services/list');

/* GET todos. */
router.get('/clientList', async function(req, res, next) {
    console.log('GET request /api/clientList received');

    try {
        const result = await clientList.getClientList();

        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/clientList/saving', async function(req, res, next) {
    console.log('POST request /api/todo/saving received with parameters: ' + JSON.stringify(req.body));

    try {
        const result = await clientList.saving(req.body);

        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});


router.post('/clientList/deleting', async function(req, res, next) {
    console.log('POST request /api/todo/deleting received with parameters: ' + JSON.stringify(req.body));

    try {
        const result1 = await clientList.deleting(req.body);

        res.json(result1);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;