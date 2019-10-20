const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer(requestHandler);

function requestHandler(request, response) {
    // read index.html file
    fs.readFile(__dirname + "/index4.html", function(err, data) {
        response.writeHead(200, {"content-type": "text/html"});
        response.end(data);
    });
}

server.listen(port, function() {
    console.log("the server is now listening on port: " + port);
});