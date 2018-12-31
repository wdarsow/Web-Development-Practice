
// let response = prompt("Are we there yet?");

// while(response !== "yes" && response !== "yeah") {
//     response = prompt("Are we there yet?")
// }

// alert("We made it!");

// version 2

let response2 = prompt("Are we there yet?");

while(response2.indexOf("yes") === -1) {
    response2 = prompt("Are we there yet?")
}

alert("We made it!");
