const db = require('./db');
const helper = require('../helper');

async function getTodoTasks(){
    const rows = await db.query(
        `SELECT * FROM summer_test.todo_tasks`
    );
    const data = helper.emptyOrRows(rows);

    return data;
}

module.exports = {
    getTodoTasks
}