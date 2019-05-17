var connection = require("./connection.js");

var orm = {

    selectAll: function (table, bb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, results) {
                if (err) {
                    throw err
                }
                bb(results);
            }

            // insertOne: function (table, col, val) {

            // },

            // updateOne: function (table, col, val) {

            // }
        )
    },



    eatBurger: function (table, ate, id, bb) {
        var query = "UPDATE " + table + " SET devoured = "+ate+" WHERE id = ?";
        connection.query(query, id, function (err, results) {
            if (err) {
                throw err
            }
            bb(results);
        })
    },

    createBurger: function (table, burger_name, ate, bb) {
        var query = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?) ";
        connection.query(query, [burger_name, ate], function (err, results){
            if(err){throw err};
            bb(results);
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