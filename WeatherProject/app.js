const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html");
    // res.send("server is running")
});

app.post("/", function(req,res){

    const apiKey = "f539fac980b4c1d29cf4d8b2d443b365";
    const query = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=imperial";

    https.get(url, function(response){
        console.log(response.statusCode);

    response.on("data", function(data){
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp
        const description = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png" 
        console.log("weather description", description)
        console.log("temp is ", temp)
        res.write("<p>the temperature is  " + temp + " Fahrenheit</p>")
        res.write("<h1> the weather in " + req.body.cityName + " is " + description + "</>")
        res.write("<img src=" + imageURL + ">");
        res.send()
        // console.log(data);
    })
})
})


app.listen(3000, function(){
    console.log("server is running on port 3000");
});

