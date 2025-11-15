// let arr = [["a", true, 17], ["xyz", false, undefined]];

// console.log(arr[2][0][2]);


// print number form 1 - 15 in matrix of 3 x 5 

// MTD - 1 

// let ctr = 1;

// for (let i = 1; i <= 3; i++) {
//     let str = "";
//     for (let j = 1; j <= 5; j++) {
//         str += ctr;
//         ctr++;
//     }
//     console.log(str + " ");
// }


// MTD - 2

// for (let i = 0; i < 3; i++) {
//     let str = "";
//     for (let j = 1; j <= 5; j++) {
//         str += j + 5 * i + "";
//     }
//     console.log(str);
// }


// Printing 2D arrays

// arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

// console.log("Printing 2D arrays");

// for (let i = 0; i < arr.length; i++) {
//     str = "";
//     for (let j = 0; j < arr[i].length; j++) {
//         str += arr[i][j] + " ";
//     }
//     console.log(str);
// }



// Print the sum of each row

// input : arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

// output : 15 40 65


// arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

// console.log("Printing 2D arrays");

// let allMatrixSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     str = "";
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//         // str += arr[i][j] + " ";
//         sum += arr[i][j];
//     }
//     // console.log(str);
//     console.log(sum);
//     allMatrixSum += sum;
// }

// console.log("Sum of elements of Matrix ", allMatrixSum);



// Print the sum of each (product of elements of each even indexed row)

// input : arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

// output : 
// 360480

// (1*2*3*4*5 + 11*12*13*14*15)\

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     // if(i % 2 != 0) {
//     //     continue;
//     // }
//     if (i % 2 == 1) {
//         continue;
//     }
//     let multiply = 1;
//     for (let j = 0; j < arr[i].length; j++) {
//         multiply *= arr[i][j];
//     }
//     sum += multiply;
// }
// console.log(sum);



// Print the matrix colum wise

// input : arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

// output : 
// 1 6 11
// 2 7 12
// 3 8 13
// 4 9 14
// 5 10 15


// for (let i = 0; i < arr[0].length; i++) {

//     let str = "";

//     for (let j = 0; j < arr.length; j++) {
//         str += arr[j][i] + " ";
//     }
//     console.log(str);
// }


// Function to print all the elements of primary diagonal
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// MTD - 1
// function printPrimaryDiagonal(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         for (let j = 0; j < n; j++) {
//             if (i === j) {
//                 str += arr[i][j];
//             }
//         }
//         console.log(str);
//     }
// }

// printPrimaryDiagonal(arr1);

// MTD - 2
function printPrimaryDiagonal(arr) {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let str = "";
        str += arr[i][i];
        sum += arr[i][i];
        console.log(str);
    }
    let res = (sum % 2 === 0) ? "Even" : "Odd";
    console.log(res);
}

printPrimaryDiagonal(arr1);



function printSecondaryDiagonal(arr) {
    let n = arr.length;
    let secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {

    }
}



// function to check if primry diagonal sum is Even or Odd

function printPrimaryDiagonal(arr) {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let str = "";
        sum += arr[i][i];
    }
    let res = (sum % 2 === 0) ? "Even" : "Odd";
    console.log(res);
}

printPrimaryDiagonal(arr1);