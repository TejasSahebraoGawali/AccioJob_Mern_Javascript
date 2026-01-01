// ########### Insertion Sort ###########

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let ptr = i - 1;
        let temp = arr[i];

        while (ptr >= 0 && arr[ptr] > temp) {
            arr[ptr + 1] = arr[ptr];
            ptr--;
        }
        arr[ptr + 1] = temp;
    }
    return arr;
}


let arr = [22, 1, 33, 12, 14];
console.log(insertionSort(arr));