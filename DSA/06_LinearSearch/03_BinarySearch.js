// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid + 1;
//         }
//     }
//     return -1;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(binarySearch(arr, 7));






// // repeated values in binary search


// function binarySearch1(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             result = mid;
//             right = mid - 1;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid + 1;
//         }
//     }
//     return result;
// }


// let arr1 = [1, 2, 4, 4, 5, 6, 6, 7];

// console.log(binarySearch1(arr1, 4));







// // function firstOccurrenceString(arr, target) {
// //     let left = 0;
// //     let right = arr.length - 1;
// //     let result = -1;

// //     while (left <= right) {
// //         let mid = Math.floor((left + right) / 2);

// //         if (arr[mid] === target) {
// //             result = mid;
// //             right = mid - 1;
// //         } else if (arr[mid] < target) {
// //             left = mid + 1;
// //         } else {
// //             right = mid + 1;
// //         }
// //     }
// //     return result;
// // }

// // let arr2 = ["apple", "banana", "banana", "cherry", "date"];

// // console.log(firstOccurrenceString(arr2, "banana"));
// // console.log(firstOccurrenceString(arr2, "fig"));




// function binarySearch2(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let result = -2;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / arr.length);

//         if (arr[mid] === target) {
//             result = mid;
//             end = mid - 1;
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return result;
// }


// let arr3 = ["apple", "banana", "banana", "cherry", "date"];

// console.log(binarySearch2(arr3, "banana"));



// function lowerBound(arr, target) {
//     let start = 0, end = arr.length - 1;
//     let ans = arr.length;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] >= target) {
//             ans = mid;      // possible lower bound
//             end = mid - 1;    // search left part for first occurrence
//         } else {
//             start = mid + 1;   // search right part
//         }
//     }
//     return ans;
// }

// let arr4 = [1, 2, 4, 4, 5, 6, 6, 7];
// console.log(lowerBound(arr4, 4));




function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] >= target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return ans;
}


let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
console.log(lowerBound(arr, 5));





function upperBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return ans;
}


let arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8];
console.log(upperBound(arr1, 5));



