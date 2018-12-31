// 1. print all numbers between -10 and 19
// 2. print all even numbers between 10 and 40
// 3. print all odd numbers between 300 and 333
// 4. print all numbers divisible by 5 AND 3 between 5 and 50

let num1 = -9;

while(num1 < 19) {
    console.log("Between -10 and 19: " + num1);
    // let mainSection = document.getElementById("whileSection");
    // mainSection.append("Between -10 and 19: " + num1);
    // document.getElementById("whileSection").innerHTML("test");
    num1++;
}

// **** Exercise 2

let num2 = 11; 

while(num2 < 40) {
    if(num2 % 2 === 0) {
        console.log("Between 10 and 40: " + num2);
    }
    num2++;
}

// ***** Exercise 3

let num3 = 300;

while(num3 < 333) {
    if((num3 % 2) != 0) {
        console.log("Odd numbers between 300 and 333: " + num3);
    }
    num3++;
}

// ***** Exercise 4
// print all numbers divisible by 5 AND 3 between 5 and 50

let num4 = 5;

while(num4 < 50) {
    if((num4 % 5 === 0) && (num4 % 3 === 0)) {
        console.log("Divisible by 5 AND 3: " + num4)
    }
    num4++;
}
