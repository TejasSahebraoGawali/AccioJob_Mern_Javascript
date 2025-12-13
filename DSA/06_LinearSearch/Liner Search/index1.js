// find minimum num in Array

arr = [23, 11, 12, 8, 55, 10, 31];
// console.log(findMin(arr));


function findMin(arr) {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}




// finding whether a word exists in a sentence

let sentance = "I love coding in JS";
let searchterm = "coding"
// console.log(findWord(sentance, searchterm));

function findWord(sentance, searchterm) {
    let word = sentance.split(" ");
    console.log(word);

    for (let i = 0; i < word.length; i++) {
        if (word[i] === searchterm) {
            return true;
        }
    }
    return false;
}