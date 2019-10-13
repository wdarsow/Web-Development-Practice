var http = require("http");

var port1 = 7000;
var port2 = 7500;

let goodPhrases = ["great syntax", "no spelling errors", "keep up the great work"];
let badPhrases = ["spelling errors", "missing punctuation", "not following coding standards"];

function request7000(request, response) {
    let randomWord = Math.floor(Math.random() * 3);
    response.end(goodPhrases[randomWord] + " " + request.url);
}

function request7500(request, response) {
    let randomWord2 = Math.floor(Math.random() * 3);
    response.end(badPhrases[randomWord2] + " " + request.url);
}

var server = http.createServer(request7000);
var server2 = http.createServer(request7500);

server.listen(port1, function() {
    console.log("The server is listening on port " + port1)
});

server2.listen(port2, function() {
    console.log("The server is listening on port " + port2)
});

// console.log(exports);