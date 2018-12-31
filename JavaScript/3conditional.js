// prompt always returns a string unless you put number in front of the prompt
let age = Number(prompt("How old are you?"));

if(age < 0) {
    console.log("Error: less than 0");
}

else if(age === 21) {
    console.log("Happy 21st Birthday!");
}

else if(age % 2 !== 0) {
    console.log("Your age is odd!")
}

// else if((age % 2) == 1) {
//     console.log("Your age is odd!")
// }

else if(age % (Math.sqrt(age)) === 0) {
    console.log("perfect Square!")
}

else {
    console.log("None of the conditions were met!")
}