// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}



// Object for all our SQL statement functions.
var orm = {
  //show all burgers
  selectAll: function(tableInput, cb){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //make a new burger
  insertOne: function(burger_name, cb){
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [burger_name], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },  
  // devour a burger
  updateOne: function(table, condition, cb){
    var queryString = "UPDATE " + table + " SET devoured = true  WHERE id = ?";
    connection.query(queryString,[condition], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;