var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
//  a single placeholder(?) is for a column value
// double question mark and single question mark are not interchangable
// select * stands for selected everything
class ORM  {
  constructor(connection){
    this.connection = connection
  }

  select(tableInput, colName) {
    // e.g. SELECT name FROM buyers;
    const queryString = "SELECT ?? FROM ??";
    // returns a promise
    return this.connection.query(queryString, [colName, tableInput])
  }

  selectWhere(tableInput, colToSearch, valOfCol) {
    // SELECT * FROM pets animal_name=rachel;
    const queryString = "SELECT * FROM ?? WHERE ?? = ?";
    return this.connection.query(queryString, [tableInput, colToSearch, valOfCol])
  }

  selectAndOrder(whatToSelect, table, orderCol) {
    const queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    return this.connection.query(queryString, [whatToSelect, table, orderCol])
  }

  findWhoHasMost(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    const queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    return this.connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol]);
  }
  
  innerJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol) {
    // "SELECT animal_name, buyer_name FROM pets INNER JOIN buyers ON pets.buyer_id = buyers.id"
    const queryString =
      `SELECT ${colsToSelect.join(', ')} FROM ?? INNER JOIN ?? ON ??.?? = ??.??`;

    return this.connection.query(
      queryString, [tableOne, tableTwo, tableOne, tableOneCol, tableTwo, tableTwoCol]);
  }

  // TODO: Add a remove method that removes (delete) a buyer or pet from the database
  // remove(){

  // }

};

module.exports = new ORM(connection);


// const test = new ORM(connection);
// test.select('buyers', 'buyer_name')
//   .then(results => console.table(results))
//   .catch(err => console.log(err))

// test.select('pets')
//   .then(results => console.table(results))
//   .catch(err => console.log(err))