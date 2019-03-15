console.log("hello");


// 4 ways to select the first <p> tag

let selector1 = document.getElementById("first")
console.log(selector1);

let selector2 = document.querySelector("#first")
console.log(selector2);

let selector5 = document.querySelector(".special")
console.log(selector5);

let selector3 = document.getElementsByClassName("special")[0];
console.log(selector3);

let selector4 = document.getElementsByTagName("p")[0];
console.log(selector4);

let selector6 = document.querySelector("h1 + p")
console.log(selector6);