let bodyColor = document.getElementById("body");

let buttonColor = document.getElementById("color_change");

buttonColor.onclick = colorChanger;

let counter = true;

function colorChanger() {
    if (counter) {
        bodyColor.style.backgroundColor = "purple";
        counter = false;
    } else {
        bodyColor.style.backgroundColor = "white";
        counter = true;
    }
    
}
