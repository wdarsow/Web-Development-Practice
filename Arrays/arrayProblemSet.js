// 1. printReverse function

function printReverse(array) {
    let index = (array.length - 1);
    for(i = index; i >= 0; i--) {
        console.log(array[i])
    }
}

printReverse([1, 2, 3, 4]);

// 2. isUniform function

// let allEqual = []

// function isUniform(currentValue) {
//     return currentValue === 
// }

const isUniform = arr => arr.every( v => v === arr[0] )
console.log(isUniform( [2,2,2,2] )) 


// or

function isUniformV2(arr) {
    let first = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}
    // let firstPosition = array2[0];
    // let count2 = 0;
    
    //     for(i = 1; i < array2.length; i++) {
    //         if(firstPosition === array2[i]) {
    //             return true;
    //         } else {
    //             return false
    //         }
    //     }
    // }

// 3. Sumarray

let sum = 0;
function sumArray(array3) {
    for(i = 0; i < array3.length; i++) {
        sum+= array3[i];
    }
    // console.log(sum);
    return sum;
}

console.log(sumArray([1,4,3]));


// V2

function sumArrayV2(arr2) {
    let total = 0;
    arr2.forEach(function(element) {
        total+= element;
    });
    return total;
}

console.log("this is sumArrayV2 " + sumArrayV2([2,3,4,5,6]));
// 4. Max ****** return the maximum number in the array

function maxArray(array4) {
    let maxNum = 0;
    for(i = 0; i < array4.length; i++) {
        // console.log(i);
        if(array4[i] > maxNum) {
            maxNum = array4[i];
        } else {
            continue;
        }
    }
    //console.log(maxNum);
    return maxNum;
}

console.log(maxArray([5,4,3,9,1,8]));