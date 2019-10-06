// import the http module
var http = require("http");

// this port listens for incoming requests
var port = 8080;

// this anonymous function handles requests and responses
function handleRequest(request, response) {
    // this sends a response to the client when they visit the specified port
    response.end("Thanks for visiting " + request.url);
}

// this creates a server to handle requests and passes it the handleRequest function
var server = http.createServer(handleRequest);

// this starts the server to being listening for requests
server.listen(port, function() {
    console.log("The server is listening on port " + port);
});

