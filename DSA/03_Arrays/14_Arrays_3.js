let arr = [2, 10, 6, 4, 9];

console.log({ arr });

// ################ SLICE ################

console.log(arr.slice(1, 4));   // will give elements in range [1, 4)
console.log(arr.slice(1));     // will give elemetns in range [1, N)
console.log(arr.slice());     // will give elemetns in range [0, N)

// H.W. ====> check what happens if values passed in slice() are negative



// ################ SPLICE ################

console.log(arr.splice(1, 3));    // changes the original array
console.log({ arr });


// ################ CONCAT ################

let arr2 = [-3, -4, -10, -8];
console.log(arr.concat(arr2));    //H.W. ====> How to concatenate multiple arrays


// TYPES OF LOOPS FOR ARRAYS

// the basic loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for ... in loop

for (let index in arr) {
    console.log(arr[index]);   // console.log(typeof index)  ===>  type of index here is string
}


// for ... of loop

for (let value of arr) {
    console.log(value);
}


// Write a function which prints the prefix sum of an array


function prefixSum(arr) {
    let prefixSumArr = [];
    let sum = 0;
    for (let num of arr) {
        sum += num;
        prefixSumArr.push(sum);
    }
    return prefixSumArr;
}


arr2 = [12, 4, -8, 10];
console.log(prefixSum(arr2));

function preSum(arr) {
    prefixArr = [];
    prefixArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixArr[i] = prefixArr[i - 1] + arr[i];
    }
    return prefixArr;
}
console.log(preSum(arr2));


// Write a function to swap values of two variables

let x = 10, y = 20;
console.log({ x, y });

let temp = x;
x = y;
y = temp;

console.log({ x, y });


// Swapping two values of an array
// input: arr = [1, 2, 3, 4, 5], ind1 = 1, ind2 = 4;
// output: arr[1, 5, 3, 4, 2];


function swapArrElements(arr, ind1, ind2) {
    let n = arr.length;
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;

    console.log({ arr });
}

arr = [1, 2, 3, 4, 5];
swapArrElements(arr, 1, 4);


// Question : Print  elements at odd indices of an array

// input1 : arr = [1, 2, 3, 4, 5];  ---> odd length array
// outpu1 : arr = 2 4

// input2 : arr = [1, 2, 3, 4, 5, 6];   ---> even length array
// output2 : 2 4 6

function oddIndexElement(arr) {
    let n = arr.length;

    // for(let i = 0; i < n; i++) {
    //     if(i % 2 === 1) {
    //         console.log(arr[i]);
    //     }
    // }



    for (let i = 1; i < n; i += 2) {
        console.log(arr[i]);
    }
}

oddIndexElement(arr);




// Question : Swap alternate elements of an array

// input1 : arr = [1, 2, 3, 4, 5];  ---> odd length array
// outpu1 : arr = [2, 1, 4, 3, 5];

// input2 : arr = [1, 2, 3, 4, 5, 6];   ---> even length array
// output2 : [2, 1, 4, 3, 6, 5];



function alternateSwap(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

let arr4 = [1, 2, 3, 4, 5];
console.log(alternateSwap(arr4));

console.log("Swapping alternate elements of the arr : " + arr.join(", "));

let arr5 = [1, 2, 3, 4, 5, 6];
console.log(alternateSwap(arr5));



// Hetrogenous property of Arrays in JS

console.log("Hetrogenous property");

arr6 = [1, 2, "123", 2, 344, true, [3, 4, "five", [2, 5, "printMe"]]];

// how to print "printMe" from above array

console.log(arr6[arr6.length - 1][3][2]);


// HW Question : Given an array of consecutive numbers, but there's one number that's missing, find it 
// input : [1, 2, 3, 5, 6, 7, 8];
// output : 4

let arr7 = [1, 2, 3, 5, 6, 7, 8];






// ******************** SUBARRAY ********************

// Subarray is a contigous part of an array
// A = [1, 4, 5, 7, 3, 2];

// Valid Subarray : [1],
//                 [4, 5, 7]
//                 [3, 2]
//                 [1, 4, 5, 7, 3]

// Total number of subarrays : n(n+1)/2

function printSubarray(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let subarr = [];
        for (let j = i; j < n; j++) {
            // Method 1
            // subarr.push(arr[j]);
            // console.log(subarr.join(" "));

            // Method 2
            console.log(arr.slice(i, j + 1).join(" "));
        }
    }
}

printSubarray([1, 4, 5, 7, 3, 2]);



// Function to print the sum of all subarrays

function sumOfSubarrays(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            console.log(sum);
        }
    }
}

sumOfSubarrays([1, 4, 5, 7, 3, 2]);



function printSubarray(arr) {

    let n = arr.length;
    let allSubarraySum = 0;


    for (let i = 0; i < n; i++) {
        let subarr = [];
        let sum = 0;
        let targetArr = [];

        for (let j = i; j < n; j++) {
            sum += arr[j];
            allSubarraySum += sum;
            console.log(arr.slice(i, j + 1).join(" "),"=", sum);

            targetArr.push([arr[j]]);
            if(sum === 17) {
                console.log("the target subarray : " , targetArr.join(" "));
            }
        }
    }
    console.log({ allSubarraySum });
}

printSubarray([1, 4, 5, 7, 3, 2]);


// write a program to print the subarray whose sum is target sum (=T)
// input = [1, 4, 5, 7, 3, 2];
// output = [5, 7, 3];

function printTargetSubarray(arr) {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let subarr = [];
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += arr[j];

            subarr.push([arr[j]]);
            if(sum === 17) {
                console.log(sum, "the target subarray : " , subarr.join(" "));
            }
        }
    }
}

printTargetSubarray([1, 4, 5, 7, 3, 2]);