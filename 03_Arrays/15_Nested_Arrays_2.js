// Write a function to find the sum of all subarrays whose length is K

// input : A = [7, 4, 8, 6, 5]; , K = 3
// output : 56


function sumAllSubarraysOfSizeK(arr, k) {
    let totalSum = 0;
    let n = arr.length;

    for (let i = 0; i <= n - k; i++) {
        let subSum = 0;
        for (let j = i; j < i + k; j++) {
            subSum += arr[j];
        }
        totalSum += subSum;
    }

    return totalSum;
}

let arr = [7, 4, 8, 6, 5];
let k = 3;
console.log(sumAllSubarraysOfSizeK(arr, k));


// continuing nested arrays

const array1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
const array2 = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];


// print the value of 4 from array1

console.log(array1[1][1]);
console.log("checking if array1 is an array or not using Array.isArray() method", Array.isArray(array1));



if (Array.isArray(array1[4])) {
    if (Array.isArray(array1[4][1])) {
        console.log("Printing 4", array1[4][1][0]);
    }
}

// check if 2D nested array is a matrix or not
function isMatrix(arr) {
    for (let i = 1; i < arr.length; i++) {
        let firstRowLength = arr[0].length;
        if (arr[i].length !== firstRowLength) {
            return false;
        }
    }
    return true;
}

console.log(isMatrix(array1));
console.log(isMatrix(array2));




// function to reverse an array
// input : [3, 2, 4, 1, 9];
// output : [9, 1, 4, 2, 3];

function reverseArray(arr1) {
    let n = arr1.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {

        // MTD - 1 By Swapping with temp variable
        // let temp = arr1[i];
        // arr1[i] = arr1[n - 1 - i];
        // arr1[n - 1 - i] = temp;

        // MTD - 2 by Destructuring
        [arr1[i], arr1[n - i - 1]] = [arr1[n - i - 1], arr1[i]]
    }
    console.log(arr1);
}

let arr1 = [3, 2, 4, 1, 9];
reverseArray(arr1);


// Reverse each row of a nested 2D array

// input: [[1, 2], [2, 3, 4, 5], [3, 4, 5, 6]];
// output: [[2, 1], [5, 4, 3, 2], [6, 5, 4, 3]];


function reverseNestedArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let m = arr[i].length;
        for (let j = 0; j < Math.floor(m / 2); j++) {
            [arr[i][j], arr[i][m - j - 1]] = [arr[i][m - j - 1], arr[i][j]];
        }
    }
    console.log(arr);
}

let arr2 = [[1, 2], [2, 3, 4, 5], [3, 4, 5, 6]];
reverseNestedArray(arr2);


// Reverse columns of a 2D matrix

// input: [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];
// output : 
// 3 2 1
// 4 3 2
// 5 4 3
// 6 5 4

// explanation: 

// actual array after reversing the colums will be
// [
//   [3, 4, 5, 6],
//   [2, 3, 4, 5],
//   [1, 2, 3, 4],
// ]