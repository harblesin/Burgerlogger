var orm = require("../config/orm.js");

var burger = {

selectAll: function(bb){
    orm.selectAll("burgers", function(res){
        bb(res)
    })
},

// insertOne(table, col, val),

// updateOne(table, col, val)

};

module.exports = burger;