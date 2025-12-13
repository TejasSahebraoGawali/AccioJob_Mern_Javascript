// find upper bound using binary search

function upperBound(arr, key) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] <= key) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}




let arr1 = [1, 2, 3, 4, 4, 4, 7, 9];
let key = 4;

console.log(upperBound(arr1, key));