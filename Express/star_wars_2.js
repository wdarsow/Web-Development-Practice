// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  // console.log(req);
  res.send("Welcome to the Star Wars Page!");
});

app.get("/:character", function(req, res) {
  var chosen = req.params.character;
  console.log("this is the request params " + req.params.character);
  for(let i=0; i < characters.length; i++) {
    if(characters[i].routeName == chosen) {
      console.log("Match found in the for loop " + characters[i].routeName);
      console.log("Match found in the for loop " + characters[i].name);
      console.log("Match found in the for loop " + characters[i].role);
      console.log("Match found in the for loop " + characters[i].age);
      console.log("Match found in the for loop " + characters[i].forcePoints);
    }
  }
  // console.log("this is chosen index " + chosen[i])

  // What does this log?
  console.log("This is the chosen variable passed in after the URL " + chosen);

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




/*
Examine the code sent to you. Once again, run the server2.js file and view the page in the browser. Troubleshoot any issues that arise. Again NO CODE CHANGES required.
Then once you have a working server instance, begin to examine the file. Try to explain to yourself and those around you what the significance of /:characters and req.params.characters is.
Create a test case to check your hypothesis.
*/