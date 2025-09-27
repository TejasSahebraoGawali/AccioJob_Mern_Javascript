/* arr1 is a const variable but still, 
we're able to change the value of it, as it's a non-primitive data type
*/
const arr1 = [1, 2, 3, 4, 5];
arr1[0] = 10;
//arr1 = [23, 34, 56, 59]; // this is wrong, this violates the const constant property


arr = ["Rajat", "Dev", "Ram", "Sita"];
arr[0] = "Laxman";
console.log(arr);

// changing array elements
arr = [1, 5, 6, 2, 1, 10];
arr[1] = 7;
console.log({ arr });
 
/* ================== Methods in Arrays ================== */
/* Insertion in Arrays */

// inserts at end
console.log("arr.push() return value: ", arr.push(15)); //they return the new length of arr
// H.W. how to insert multiple elements using push()
console.log("arr.push() return value: ", arr.push(7, 5, 12, 6, 8));

// inserts at begining
console.log("arr.unshift() return value: ", arr.unshift(-5));
// H.W. how to insert multiple elements using unshift()
arr.unshift(6, 5, 4, 3, 8, 9);
console.log(arr);


// Deletions in Array

// #1 Deletion at end
arr.pop(); // find out what it will return

// #2 Deletion at begining
arr.shift(); // find out what it will return


// Searching in Array
// write a function to return the index of a target element function findIndex (arr, targetValue)

// code

// return indexOftargetValue;
// }
// if the targetValue Doesn't exists in array, then return -1

// consider unique elements in Array


// Inbuilt method to find the first index 

console.log("index of 10 in Array", arr.indexOf(10));  //returns index if 10 is present 
console.log("index of 10 in Array", arr.indexOf(15));  // returns -1 if 15 doesn't exists


// inbuilt method to find the last index of an element 
console.log("Last index of 1 in Arr", arr.lastIndexOf(3));


// inbuilt method to check if an element is present or not 

console.log(arr.includes(6)); // returns true as 6 is present 
console.log(arr.includes(17)); // returns false as 17 is not present 


// find and update the value of element = 10 to 14 using indexOf() and includes() methods
const arr3 = [1, 2, 3, 4, 10];

if (arr3.includes(10)) {
    arr3[arr3.indexOf(10)] = 14;
}
console.log(arr3);

console.log(arr3.indexOf(1));