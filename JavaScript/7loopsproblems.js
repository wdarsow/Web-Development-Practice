// 1. print all numbers between -10 and 19
// 2. print all even numbers between 10 and 40
// 3. print all odd numbers between 300 and 333
// 4. print all numbers divisible by 5 AND 3 between 5 and 50



// 1. print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19")
for(i=-10; i<20; i++) {
    console.log(i);
}

// 2. print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for(i=10; i<41; i+=2){
    console.log(i);
}

// 3. print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333")
for(i=301; i<334; i+=2) {
    console.log(i);
}

// 4. print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for(i=5; i<51; i++) {
    if(i%5 === 0 && i%3 === 0) {
        console.log(i);
    }
}
