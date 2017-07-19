var express = require('express');
var app = express();

var request = require('request');

// routes
app.get("/results", function(req, res){
    // res.send("Results route...")
    request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb",
             function(error, response, body){
                 if(!error && response.statusCode == 200 )
                   var results = JSON.parse(body);
                   res.send(results["Search"][0]);
             });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Start node.js Server!");
});