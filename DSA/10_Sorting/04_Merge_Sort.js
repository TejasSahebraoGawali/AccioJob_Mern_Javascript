// ############ Merge Sort ############

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArray.length) {
        mergedArray.push(leftArray[leftIndex++]);
    }

    while (rightIndex < rightArray.length) {
        mergedArray.push(rightArray[rightIndex++]);
    }

    return mergedArray;
}

let arr = [5, 2, 9, 1];
console.log(mergeSort(arr));
