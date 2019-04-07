
// function to pass in a word, convert it to an array, and then create the reversed version of the word
function palindrome(word) {
    let splitWord = word.split('');
    let wordLength = word.length;
    let splitReverse = [];

    function createReverse () {
        for(let i = (wordLength - 1); i >= 0; i--) {
            splitReverse.push(splitWord[i]);
        }
    }
    createReverse(word);

    let joinedSplitReverse = splitReverse.join('');
    let joinedSplitWord = splitWord.join('');

    if(joinedSplitReverse == joinedSplitWord) {
        console.log(word + " IS a palindrome!");
    } else {
        console.log(word + " is NOT a palindrome!")
    }

}

palindrome('racecar');