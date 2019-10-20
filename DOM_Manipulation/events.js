

let clickButton = document.querySelector("button");
console.log(clickButton);

clickButton.addEventListener("click", function() {
    if(document.body.style.background === "purple") {
        document.body.style.background = "white"
    } else {
        document.body.style.background = "purple";
    }
});

// alternate method
let isPurple = false;
if(isPurple) {
    document.body.style.background = "white";
    isPurple = false;
} else {
    document.body.style.background = "purple";
    isPurple = true;
}