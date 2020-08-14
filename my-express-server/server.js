// jshint esversion:6
const express = require("express");

const app = express();

// route we respond to, home route
app.get("/", function(request, response){
    response.send("<h1>Hello world</h1>");
    // send browser a response

//     console.log(request);
});

app.get("/contact", function(req, res){
    res.send("contact me at : andy.wu@yale.edu");
});
// specifies when it makes a get request

app.get("/about", function(req, res){
    res.send("My name is Andy and I love code and reading");
});

app.get("/hobbies", function(req, res){
    res.send("Fitness is my passion");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
// tune in to a channel called 3000
