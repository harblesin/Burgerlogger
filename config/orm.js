//Imports the connection to the database from connection.js as variable connection.
var connection = require("./connection.js");

//
var orm = {

    selectAll: function (table, callback) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, results) {
                if (err) {
                    throw err
                }
                callback(results);
            }
        )
    },



    eatBurger: function (table, ate, id, callback) {
        var query = "UPDATE " + table + " SET devoured = "+ate+" WHERE id = ?";
        connection.query(query, id, function (err, results) {
            if (err) {
                throw err
            }
            callback(results);
        })
    },

    createBurger: function (table, burger_name, ate, callback) {
        var query = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?) ";
        connection.query(query, [burger_name, ate], function (err, results){
            if(err){throw err};
            callback(results);
        })
    },

    trashBurger: function (table, id, callback)   {
        var query = "DELETE FROM " + table + " WHERE id = ?";
        connection.query(query, id, function(err, results){
            if(err){throw err};
            callback(results);
        })
    }

};


module.exports = orm;