
// let nums = [45, 65, 77, 34];

// nums.forEach(function(num) {
//     console.log(num);
// });

let colors = ["red", "yellow", "green"];

function myForEach(arr1, func) {
    // loop through array
    for(let i = 0; i < arr1.length; i ++) {
        // call function for each item in the array
        func(arr1[i]);
    }
}

// myForEach(colors, console.log);
myForEach(colors, function(parm1) {console.log("Im a function " + parm1)})

// add method to array prototype
Array.prototype.myForEach = function(func) {
    // this will refer to the array we're calling this on
    for(let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

let friends = ["Charlie", "Dave", "Maddy"];

friends.myForEach(function(name) {
    console.log(name + " is awesome")
});

// colors.myForEach()