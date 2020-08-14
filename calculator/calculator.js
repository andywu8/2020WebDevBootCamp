//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
// allows you to go into routes

// homeroute
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
    // response.send("<h1>Hello bro</h1>");
});


app.post("/", function(req, res){
    // name of num 1
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    console.log("the result is " + result);
    res.send("the result is " + result );
    // res.send("thanks for posting that");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("your bmi is " + bmi);
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});