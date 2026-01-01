// bubble sort

// function bubbly(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// let arr = [22, 1, 33, 12, 14, 16];

// console.log(bubbly(arr));



// selection sort


// function selecty(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex != i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }
//     return arr;
// }


// let arr = [22, 1, 33, 12, 14, 16];

// console.log(selecty(arr));



// function selection(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         let minIdx = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         if (minIdx != i) {
//             [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//         }
//     }
//     return arr;
// }

// console.log(selection([22, 1, 33, 12, 14, 16]));




// Inertion Sort


// function insertSort(arr) {
//     let n = arr.length;

//     for (let i = 1; i < n; i++) {
//         let ptr = i - 1;
//         let curr = arr[i];

//         while (ptr >= 0 && arr[ptr] > curr) {
//             arr[ptr + 1] = arr[ptr];
//             ptr--;
//         }
//         arr[ptr + 1] = curr;
//     }
//     return arr;
// }

// console.log(insertSort([22, 1, 33, 12, 14, 16]));



// var majorityElement = function (nums) {
//     const mymap = new Map();
//     for (let num of nums) {
//         mymap.set(num, (mymap.get(num) || 0) + 1);
//     }

//     for (const [key, value] of mymap) {
//         if (value >= (nums.length / 2)) {
//             return key;
//         }
//     }
//     return null;
// };

// let nums = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums));



// Merge Sort


// function mergeSortwa(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return mergewa(mergeSortwa(left), mergeSortwa(right));
// }

// function mergewa(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log(mergeSortwa([22, 1, 33, 12, 14, 16]));




// Quick Sort


function quickwa(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIdx = partition(arr, start, end);
        quickwa(arr, start, pivotIdx - 1);
        quickwa(arr, pivotIdx + 1, end);
    }
    return arr;
}


function partition(arr, start, end) {
    let i = start - 1;
    let pivot = arr[end];

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

console.log(quickwa([22, 1, 33, 12, 14, 16]));




function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pvtIdx = part(arr, start, end);
        quickSort(arr, start, pvtIdx - 1);
        quickSort(arr, pvtIdx + 1, end);
    }
    return arr;
}

function part(arr, start, end) {
    let i = start - 1;
    let pvt = arr[end];

    for (let j = start; j < end; j++) {
        if (arr[j] < pvt) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

console.log(quickSort([22, 1, 33, 12, 14, 16]));