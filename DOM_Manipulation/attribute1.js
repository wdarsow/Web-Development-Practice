let link1 = document.querySelector("a");
// link1.getAttribute("href");
console.log(link1);

link1.setAttribute("href", "https://www.petsmart.com/");

link1.textContent = "Link to PetSmart"

console.log(link1);

let img1 = document.querySelector("img");
console.log(img1);

img1.setAttribute("src", "dog.jpg");
console.log(img1);

// loop through a tag links on page and console.log the text content of each one

var links = document.getElementsByTagName("a");
for(var i = 0; i < links.length; i++) {console.log(links[i].textContent)}

// change background of all links on page to pink
for(var i = 0; i < links.length; i++) {
    links[i].style.background = "pink";
}

// add purple border and change text color to orange
for(var i = 0; i < links.length; i++) {
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "orange";
    }

// console.log the href links on the page
for(var i = 0; i < links.length; i++) {
    console.log(links[i].getAttribute("href"));
}

// change all link paths to bing.com
for(var i = 0; i < links.length; i++) {
	links[i].setAttribute("href", "http://www.bing.com");
}