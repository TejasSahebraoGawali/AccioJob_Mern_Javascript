// ARRAYS

// Arrays removes the pain of creating multiple variables for the same type of Data.

// A collection of similar type of data that can be managed / accessed using one varible only.

// example : const numbers = [1, 2, 4, 5, 6, 6];

// Arrays are non primitive datatype

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

n = arr.length;

let sum = sumOfArray(arr);
console.log({ sum });

function sumOfArray(arr) {
    let n = arr.length, sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}



// Question 

// find the absolute difference of (sum of all the odd elements) and (sum of all even elements) 

// Absolute differene in JS ====> |3 -7| = 4
// console.log(Math.abs(3-7));

function absoluteDiff(arr) {
    let n = arr.length;
    sumOfOdd = 0;
    sumOfEven = 0;
    for (let i = 0; i < n; i++) {

        if (arr[i] % 2 === 0) {
            sumOfEven += arr[i];
        }
        else {
            sumOfOdd += arr[i];
        }
    }

    return Math.abs(sumOfOdd - sumOfEven);
}

console.log(absoluteDiff(arr));




// fizz Problem

// you are given an array write a funciton which print in below manner

// if there a multiple of 3 print Fizz
// if there a multiple of 5 print Buzz
// if there a multiple of 3 and 5 print FizzBuzz

const arr1 = [3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 27, 30];

let len = arr1.length;

function FizzBuzz(arr1) {
    for (let i = 0; i < len; i++) {
        if (arr1[i] % 3 === 0 && arr1[i] % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (arr[i] % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log("Fizz");
        }
    }
}

FizzBuzz(arr1);


let arr2 = ["Dev", "Ram", "Sita"];

arr2[0] = "Laxman";
console.log(arr2);
