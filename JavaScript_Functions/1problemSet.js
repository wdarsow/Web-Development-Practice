// 1. write a function isEven() which takes a single numeric argument and returns true if the number is even and false if it's not

function isEven(num1) {
    if(num1 % 2 === 0) {
        console.log("true was returned");
        return true;
    } else {
        console.log("false was returned");
        return false;
    }
}
 // or

 function isEven2(num2) {
     return num % 2 === 0; // num % 2 evaluated first and it's a true or false boolean statement
 }


// isEven(16);

// 2. write a function factorial() which takes a single numeric argument and returns the factorial of that number

function factorial(fact1) {

    let result = 1;
    
    for(i = 2; i <= fact1; i++) {
        result *= i;
        }
    return result;
}

// console.log(factorial(9));

// factorial(4) is 4x3x2x1

// 3. kebabToSnake() write a function which takes a single kebab-cased string argument and returns the snake_cased version. 
//replace - with _

function kebabToSnake(arg1) {
    return arg1.replace(/-/g, "_");
}