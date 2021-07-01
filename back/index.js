const express = require('express');
const app = express();

app.get('/api/greet', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.send({ message: 'hi!' });
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
