const http = require("http");
const PORT = 8080;
const server = http.createServer(handleRequest);

//start server
server.listen(PORT, function() {
    // callback function runs when the server starts listening
    console.log("server is listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {

    console.log("this is the handleRequest function's req " + Object.getOwnPropertyNames(req));
    console.log("this is the handleRequest function's res " + Object.getOwnPropertyNames(res));

    // capture's URL request is made to
    let path = req.url;

    // display a different HTML file based on the URL
    switch(path) {
        case "/":
            return displayRoot(path, req, res);
        case "/portfolio":
            return displayPortfolio(path, req, res);
        default: 
            return display404(path, req, res);
    }
}

// when visiting localhost http://localhost:8080/ this function is run
function displayRoot(url, req, res) {
    const myHtml = "<html>" + "<body><h1>Root Page</h1></body></html";
    
    // this configures the response to return a status code of 200 and to be an html document
    res.writeHead(200, { "Content-Type": "text/html" });

    // end the response and send the client the myhtml string from above
    res.end(myHtml);
}

// when visiting localhost http://localhost:8080/portfolio this function is run
function displayPortfolio(url, req, res) {
    const myHtml = "<html><body><h1>Portfolio Page</h1></body></html>";
  
    // this configures the response to return a status code of 200 and to be an html document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // end the response and send the client the myhtml string from above
    res.end(myHtml);
  }
  
  // when visiting a path that has not been defined above 
function display404(url, req, res) {
    const myHtml = "<html>" + "<body><h1>404 Page</h1></body></html";
    
    // this configures the response to return a status code of 404 and to be an html document
    res.writeHead(404, { "Content-Type": "text/html" });

    // end the response and send the client the myhtml string from above
    res.end(myHtml);
}
