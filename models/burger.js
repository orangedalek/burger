
var orm = require("../config/orm.js");
//show all the burgers
var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //make a new burger
  insertOne: function(vals, cb) {
    orm.insertOne("burgers", vals, function(res) {
      cb(res);
    });
  },
  //devour a burger
  updateOne: function(condition, cb) {
    orm.updateOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;