// exercise 1

let num = 1;

while(num <= 10) {
    console.log(num);
    num+=2;
}
// prints 1, 3, 5, 7, 9

// exercise 2 ***

let num2 = 1; 

while(num2 <= 20) {
    if(num2 % 4 === 0) {
        console.log("Exercise Two: " + num2);
    }
    num2++;
}

// prints 4, 8, 12, 16, 20

// Exercise 3 infinite loop below

// let num3 = 100;

// while(num3 < 150) {
//     console.log("Exercise 3: " + (num3 + 1));
//     num--;
// }

// prints 101, 100, 99, 98, 97