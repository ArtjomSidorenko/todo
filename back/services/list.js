const cl = require('./cl');
const helperList = require('../helperList');

async function getClientList() {
    const rows = await cl.query(
        `SELECT *
         FROM summer_test.todo_tasks`
    );
    const data = helperList.emptyOrRows(rows);

    return data;
}

async function saving(clientList) {
    const result = await cl.query(
        `INSERT INTO summer_test.todo_tasks (mail)
         VALUES (?)`,
        [clientList.description]
    );

    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}


async function deleting(clientList) {
    const result = await cl.query(
        `DELETE FROM summer_test.todo_tasks WHERE id = ?;`,
        [clientList.removing]
    );

    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}

// SQL: DELETE FROM summer_test.todo_tasks WHERE id = 1;


module.exports = {
    getClientList,
    saving,
    deleting

}