


function binarySearch(arr, key) {
    let n = arr.length;

    let start = 0;
    let end = n - 1;


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == key) {
            return mid;
        }
        else if (arr[mid] < key) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}


let arr = [10, 22, 55, 77, 88, 111]
let key = 77;

console.log(binarySearch(arr, key));