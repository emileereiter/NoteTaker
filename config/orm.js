const connection = require('./connection.js');
class ORM
{
    constructor(connection)
    {this.connection = connection;}
printQuestionMarks (numberOfValues){
    const questionMarks =[];
    for (var i = 0; i < numberOfValues; i++ )
        {questionMarks.push('?');}
    return questionMarks.join(',');
}
selectAll(table) {
    const queryString = 'SELECT * FROM ??';
    return this.connection.query(queryString, [table])
}
create(table, columns, values)
{
    const queryString = ` INSERT INTO ?? (${columns.join(',')}) VALUE (${this.
    printQuestionMarks(values.length)})`;
    console.log(queryString);
    return this.connection.query(queryString, [table, ...values])
    }
update(table, objColVals, id)
{
    var queryString = `UPDATE ?? SET ? WHERE ?`;
    console.log(queryString);
    return this.connection.query(queryString, [table, objColVals, id])
    }
delete(tableInput, objColVals, colValue)
{
    const queryString = " DELETE FROM ?? WHERE ?? = ? ";
    return this.connection.query( queryString, [tableInput, objColvals, colValue])
    }
}
module.exports = new ORM(connection);