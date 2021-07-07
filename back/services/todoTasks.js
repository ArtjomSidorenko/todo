const db = require('./db');
const helper = require('../helper');

async function getTodoTasks() {
    const rows = await db.query(
        `SELECT *
         FROM summer_test.todo_tasks`
    );
    const data = helper.emptyOrRows(rows);

    return data;
}

async function save(todoTask) {
    const result = await db.query(
        `INSERT INTO summer_test.todo_tasks (task)
         VALUES (?)`,
        [todoTask.description]
    );

    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}


async function deleted(todoTask) {
    const result = await db.query(
        `DELETE FROM summer_test.todo_tasks WHERE id = ?;`,
        [todoTask.removing]
    );

    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}

// SQL: DELETE FROM summer_test.todo_tasks WHERE id = 1;


module.exports = {
    getTodoTasks,
    save,
    deleted

}