// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

let obi_wan_kenobi = {
    name: "Obi-Wan Kenobi",
    role: "Sith Lord",
    age: 150,
    forcePoints: 1000
};
//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});



// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

app.get("/obi_wan_kenobi", function(req, res) {
    res.json(obi_wan_kenobi);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

/*
Work with those around you to confirm your server1.js file working. This means figuring out: 
what dependencies to install, how to run the file, and how to view the resulting website in your browser. 
This step requires you to make ZERO changes to the code file. At this point, you are just getting the file you are given to run.
Then, once you've gotten the original code to display in browser add code to the file so that a new route for Obi-Wan Kenobi. 
Use the comments and the previous code in the file as a guide.

Help those around you when done.
*/