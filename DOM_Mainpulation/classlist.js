



let toggle = document.getElementById("number1");

// toggle.classList.add("testing123");
// console.log(toggle);
// console.log("hello");

let buttonToggle = document.getElementById("button-changer");

buttonToggle.onclick = colorChange;

function colorChange() {
    toggle.classList.toggle("testing123");
}