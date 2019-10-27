const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.get(["/", "/foods", "/movies", "/css"], function (req, res) {
    
    let requestUrl = req.url;
    let filePath;

    switch (requestUrl) {
        case "/": 
            filePath = "/express5html1.html";
            break;
        case "/foods":
            filePath = "/express5html2.html";
            break;
        case "/movies":
            filePath = "/express5html3.html";
            break;  
        case "/css":
            filePath = "/express5html4.html";
            break;
        default:
            filePath = "/express5html1.html";
            console.log("default path triggered");
    }

    fs.readFile(__dirname + filePath, function(err, data) {
        res.writeHead(200, {"content-type": "text/html"});
        res.end(data);
    });
});

app.listen(port, function() {
    console.log("The server is running on port " + port);
});