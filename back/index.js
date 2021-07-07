const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3333;
const todoTasksRouter = require('./routes/todoTasks');


app.get('*', cors());
app.post('*', cors());
app.options('*', cors());
app.put('*', cors());
app.delete('*', cors());


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use('/api', todoTasksRouter);

app.get('/api/greet', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.send({ message: 'hi!' });
});

app.listen(port, () => {
    console.log('Application listening on port ' + port + '!');
});

