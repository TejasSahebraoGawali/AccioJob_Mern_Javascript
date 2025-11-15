let arr = [2, 3, 4, 5, 6];
let k = 3;
let s = 15;
let n = arr.length;
let newArr = [];

for (let i = 0; i < k; i++) {
    newArr.push(arr[i]);
}
for (let i = k; i < n; i++) {
    // console.log(newArr);
    let sum = 0;
    for (let j = 0; j < newArr.length; j++) {
        sum += newArr[j];
    }
    if (sum === s) {
        console.log(newArr);
    }
    newArr.shift();
    newArr.push(arr[i]);
}
// console.log(newArr);
let sum = 0;
for (let j = 0; j < newArr.length; j++) {
    sum += newArr[j];
}
if (sum === s) {
    console.log(newArr);
}