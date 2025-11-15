let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

arr[1] = ["xyz", false, undefined, 8];
console.log(arr);

arr[4] = [true, 17, "abc"];
console.log(arr);

console.log(arr[4][2][1]);




// print number from 1 - 15 in a matrix of 3 x 5

// let ctr = 1;

// for (let i = 1; i <= 3; i++) {
//     let str = "";
//     for (let j = 1; j <= 5; j++) {
//         str += ctr;
//         ctr++;
//     }
//     console.log(str + " ");
// }


// for (let i = 0; i < 3; i++) {
//     let str = "";
//     for (let j = 1; j <= 5; j++) {
//         str += (i * 5 + j) + " ";
//     }
//     console.log(str);
// }



// JavaScript Code (Matrix 3×5 with numbers 1–15) stored as a 2D array


// let rows = 3;
// let cols = 5;
// let matrix = [];
// let num = 1;

// for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < cols; j++) {
//         row.push(num);
//         num++;
//     }
//     matrix.push(row);
// }


// for (let i = 0; i < rows; i++) {
//     console.log(matrix[i].join(","));
// }

// console.log(matrix);




// Printing 2D arrays

arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

console.log("Printing 2D arrays");

for (let i = 0; i < arr.length; i++) {
    str = "";
    for (let j = 0; j < arr[i].length; j++) {
        str += arr[i][j] + " ";
    }
    console.log(str);
}




// Print the sum of each row

let matrixSum = 0;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    console.log(sum);
    matrixSum += sum;
}
console.log(matrixSum);





// Print the matrix column wise

for (let i = 0; i < arr[0].length; i++) {
    let str = "";
    for (let j = 0; j < arr.length; j++) {
        str += arr[j][i] + " ";
    }
    console.log(str);
}

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < arr.length; i++) {
    let str = "";
    str += arr[i][i];
    console.log(str);
}




console.log("Here we are printing the primary diagonal using a function");


function printPrimaryDiagonal(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let str = "";
        str += arr[i][i];
        console.log(str);
    }
}

printPrimaryDiagonal(arr);



// function to print secondary diagonal

console.log("function to print secondary diagonal");


function toPrintSecondaryDiagonal(arr) {
    let seocndaryDiagonal = [];
    for (let i = 0; i < arr.length; i++) {
        seocndaryDiagonal.push(arr[i][arr.length - 1 - i]);
    }
    console.log(seocndaryDiagonal);
}

toPrintSecondaryDiagonal(arr);


arr = [1, 4, 5, 7, 3, 2];

function targetSumSubarray(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let subarr = [];
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += arr[j];

            subarr.push([arr[j]]);
            if (sum === 17) {
                console.log(sum, "the target subarray : ", subarr.join(" "));
            }
        }
    }
}

targetSumSubarray(arr);

