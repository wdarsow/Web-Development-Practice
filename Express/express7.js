const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.use(express.urlencoded());

app.post("/", function(req, res) {
    res.send("Thanks for submitting the form, " + req.body.express_name_field + "!");
    console.log(req.body.express_name_field);
    console.log("data was just posted");
});

app.get("/", function(req, res) {
    // let requestURL = req.url;
    let filePath = "/express7.html";

// let filePath = "/express7.html";
    fs.readFile(__dirname + filePath, function(err, data) {
        res.writeHead(200, {"content-type": "text/html"});
        res.end(data);
    })
})

app.listen(port, function() {
    console.log("The server is running on port: " + port);
})

// Create an HTML file with a form that will post data.
// Create a server that will accept the POSTed data and log it to the console.
