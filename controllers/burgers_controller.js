var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Routed");
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        console.log(data)
        res.render("index", object);
    });
});

router.post("/api/burger", function(req,res){
    burger.createBurger(
        req.body.burger_name, false
    , function(results){
        res.json(results)
        console.log("successful post");
    })
})

router.put("/api/burger", function(req, res){
    burger.eatBurger(
        req.body.devoured,
        req.body.id,
        function(results){
            res.json(results)
            console.log("successful put");
        }
    )
})

router.delete("/api/burger", function(req,res){
    burger.trashBurger(
        req.body.id,
        function(results){
            res.json(results);
            console.log("Burger thrown in the trash!")
        }
    )
})

module.exports = router;