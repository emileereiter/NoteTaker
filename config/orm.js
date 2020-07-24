var connection = require("./connection.js");
class ORM  {
  constructor(connection){
    this.connection = connection
  }
  printQuestionMarks(numberOfValuesOrColumns, type){
    const questionMarks = [];
    for (var i = 0; i < numberOfValuesOrColumns; i++) {
      if(type === 'cols'){
        questionMarks.push("??");
      } else {
        questionMarks.push("?")
      } 
    }
    return questionMarks.join(', ');
  }
  selectAll(table) {
    // SELECT * FROM buyers
    const queryString = 'SELECT * FROM  ??';
    // 4)
    // database call where we pass in a sql query
    return this.connection.query(queryString, [table])
  }
  create(table, columns, values) {
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;
    return this.connection.query(queryString, [table, ...values])
  }
  delete(table, cols, value){
    const queryString = 'DELETE FROM ?? WHERE ??=?';
    return this.connection.query(queryString, [table, cols, value])
  }
};
module.exports = new ORM(connection);