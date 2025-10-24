// remove duplicates 


function removeDuplicates(str) {
    let seen = new Set();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (!seen.has(ch)) {
            seen.add(ch);
            result += ch;
        }

    }
    return result;
}
let string = "helloworld";
console.log(removeDuplicates(string));




function findPairs(arr, n, targetSum) {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        map.set(num, (map.get(num)) || 0) + 1;
    }

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let complement = targetSum - sum;

        if (map.has(complement)) {
            count += map.get(complement);
        }
        if (complement === num) {
            count--;
        }
    }
    return Math.floor(count / 2);
}


function minDeletions(word1, word2) {
    let freq1 = new Map();
    let freq2 = new Map();

    for (let i = 0; i < word1.length; i++) {
        let ch = word1[i].toLowerCase();
        freq1.set(ch, (freq1.get(ch) || 0) + 1);
    }

    for (let i = 0; i < word2.length; i++) {
        let ch = word2[i].toLowerCase();
        freq2.set(ch, (freq2.get(ch) || 0) + 1);
    }


    let deletions = 0;

    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(97 + i);
        let count1 = freq1.get(letter) || 0;
        let count2 = freq2.get(letter) || 0;
        deletions += Math.abs(count1 - count2);
    }

    return deletions;
}

console.log(minDeletions("Silentfds", "listengh"));



// ################## Question ##################

// Find pairs

// Given two unsorted arrays A of size N and B of size M, the task is to find all pairs(one from each array) 
// whose sum is equal to X.

// Input Format
// Input case contains 3 lines . The first line contains 3 space separated integers N, M, X. Then in the next 
// two lines are space separated values of the array A and B respectively.

// Output Format
// For each test case in a new line print the space separated values of all the pairs u,v where u belongs to 
// array A and v belongs to array B, such that each pair is "u,v"(without the quotes) and pairs must be ordered 
// on the basis of order of u in the array A. If no such pair exist print -1.

// Example 1
// Input

// 5 5 9
// 1 2 4 5 7
// 5 6 3 4 8
// output

// 1,8 4,5 5,4

// Explanation

// 1 + 8 = 9 , 4 + 5 =9 and 5 + 4 = 9
// constraints
// 1 <= N, M <= 100000

// 1 <= A[i], B[i] <= 100000

// 1 <= X <= 100000
