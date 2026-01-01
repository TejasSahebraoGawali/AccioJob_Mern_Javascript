// Recursive function to calculate the power of numbers


function calculatePower(base, exponent) {
    if (exponent === 1) {
        return base;
    }

    return base * calculatePower(base, exponent - 1);
}

// console.log(calculatePower(5, 2));



// Recursive function to calculate the sum of elemnets present in an array

function sumOFArrayElements(arr, index = 0) {
    if (index === arr.length - 1) {
        return arr[index];
    }
    return arr[index] + sumOFArrayElements(arr, index + 1);
}

let arr = [1, 2, 3, 4, 5];
// console.log(sumOFArrayElements(arr));



// function to reverse a string in an array

function reverseString(text, index = 0) {
    if (index === text.length) {
        return "";
    }
    return reverseString(text, index + 1) + text[index];
}


let str = "Hello";
console.log(reverseString(str));
