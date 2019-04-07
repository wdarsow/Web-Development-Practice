

let palindromeCheck = word => {return word === word.split('').reverse().join('')}



//     let reverseWord = word.split('').reverse().join('');
//     console.log(word);
//     console.log(reverseWord)
//     if(reverseWord === word) {
//         return true;
//     } else {
//         return false;
//     }
// }


console.log(palindromeCheck("madam"));