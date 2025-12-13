function lowerBound(array, x) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right - left) / 2);

        if (arr[mid] < x) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}

let arr = [1, 2, 4, 4, 4, 5, 6];
console.log(lowerBound(arr, 4));