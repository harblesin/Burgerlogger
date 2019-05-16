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
        req.body.burger, req.body.devoured
    , function(results){
        res.json(results)
    })
})

module.exports = router;