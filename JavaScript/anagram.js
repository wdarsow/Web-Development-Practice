

function anagram(word1, word2) {
    let word1string = word1.toString().split('').sort().join('');
    let word2string = word2.toString().split('').sort().join('');

    console.log(word1string, word2string);

    if(word1string !== word2string) {
        console.log('These words are not an anagram');
    } else {
        console.log('You found an anagram!')
    }
}

anagram('iceman', 'cinema');