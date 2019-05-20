var orm = require("../config/orm.js");

var burger = {

selectAll: function(callback){
    orm.selectAll("burgers", function(res){
        callback(res)
    });
},

createBurger: function(burger_name, ate, callback){
    orm.createBurger("burgers", burger_name, ate, function(res){
        callback(res);
    });
},

eatBurger: function(ate, id, callback){
    orm.eatBurger("burgers", ate, id, function(res){
        callback(res);
    });
},

trashBurger: function(id, callback){
    orm.trashBurger("burgers", id, function(res){
        callback(res);
    });
}

};

module.exports = burger;