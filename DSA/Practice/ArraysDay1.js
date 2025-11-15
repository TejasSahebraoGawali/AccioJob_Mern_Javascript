// // ################ Arrys ###########
// // slice
// let arr=[0,1,2,3,4,5,6,7,8];
// //slice from 0 to 3 ->[9,3);
// console.log(arr.slice(0,3)); //exclude an 3 indexed element 

// console.log(arr.slice())//will give an total array 

// console.log(arr.slice(4));//will be give an array from 4 to last

// console.log(arr.slice(-4,-2)); //will go backword ->[ 5, 6 ] but first is smaller than second one and also seond index is less than 0



// let arr1=[1,2,3,4,5,6];
// delete an element from an array
// console.log({arr1});
// arr1.splice(2,3);//delete from index 2ed index to 4th index forth index also deleted
// console.log({arr1});

//home work on splice
//home work on slice
//concatinate multiple array

// let arr2=[1,2];
// let arr3=[3,4];
// let arr4=[5,6];
// console.log(arr2.concat(arr3))//concat an array arr2, arr3
// console.log(arr2.concat(arr3,arr4));//multiple array concate


// for loop
// arr=[1,2,3];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//another for loop 
// for(let index in arr){
//     console.log(arr[index]);//but index type is string make sure
// }

//value of array will print
// let arr=[3,4,5];
// for(let value of arr){
//     console.log(value);
//     console.log(typeof(value));//number
// }


//write an probram calculate an prefix sum 
// let arr=[12,4,-8,10];
// let prefixArr=[];
// console.log({arr});
// for(let i=0;i<arr.length;i++){
//     if(i==0){
//         prefixArr[i]=arr[i];
//         continue;
//     }
//     prefixArr[i]=prefixArr[i-1]+arr[i];
// }
// console.log({arr1});


// second way
// let arr=[12,4,-8,10];
// let arr1=[];
// let sum=0;
// for(let value of arr){
//     sum+=value;
//     arr1.push(sum);
// }
// console.log({arr});
// console.log({arr1});




// swapping arrays
// let x=10;
// let y=20;
// console.log({x,y})
// let temp=x;
// x=y;
// y=temp;
// console.log({x,y});


// let x=10;
// let y=20;
// console.log({x,y})
// x=y+x;
// y=x-y;
// x=x-y;
// console.log({x,y});



// function swapArrElement(arr,ind1=0,ind2=0){
//   let temp= arr[ind1];
//   arr[ind1]=arr[ind2];
//   arr[ind2]=temp;

// }
// let arr=[2,3,4,5,6,7];
// console.log({arr});
// swapArrElement(arr,1,2);
// console.log({arr})


//print an element present in odd index 

// arr=[1,2,3,4,5,6,7];
// let evenIndexEle="";
// let oddIndexEle=""
// for(let i=0;i<arr.length;i++){
//     if(i%2==0){
//         evenIndexEle+=arr[i]+" ";
//     }
//     else{
//         oddIndexEle+=arr[i] +" ";
//     }
// }
// console.log({oddIndexEle});
// console.log({evenIndexEle});

// second approach to get even an odd indesed element
let arr = [0, 1, 2, 3, 4, 5, 6];
let str = " ";
for (let i = 0; i < arr.length; i += 2) {
  str += arr[i] + " ";
}
console.log("even indexed elements: " + str);
str = " ";
for (let i = 1; i < arr.length; i += 2) {
  str += arr[i] + " ";
}
console.log("odd indexed elements: " + str);



// question swap alternate element of an arrary
//[1,2,3,4]=>[2,1,4,3]
//[1,2,3,4,5]=>[2,1,4,3,5]
arr = [1, 2, 3, 4, 5, 6, 7];
console.log({ arr });
for (let i = 0; i < arr.length - 1; i += 2) {
  let temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}
console.log("swap the pair", { arr });

// second approch 
arr = [1, 2, 3, 4, 5, 6, 7];
console.log({ arr });
for (let i = 1; i < arr.length; i += 2) {
  let temp = arr[i - 1];
  arr[i - 1] = arr[i];
  arr[i] = temp;
}
console.log("swap the pair", { arr });


// heterogeneous property
let arr5 = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];
console.log(arr[5][3][2]);

function findElement(arr5, target) {
  for (let i = 0; i < arr5.length; i++) {
    if (typeof (arr5[i]) == "object") {
      return findElement(arr5[i], target);
    }
    else if (arr5[i] == target) {
      return true;
    }
  }
  return false;
}

console.log(arr.includes("printMe"))
console.log(findElement(arr, 4));


let arr6 = [1, 4, 5, 7, 3, 2];
//subarray is contigious element from an array
//[1] ,[4],[5],[7],[3],[2]

// print loop
for (let i = 0; i < arr6.length; i++) {
  let str = "";
  for (let j = i; j < arr.length; j++) {
    for (let k = i; k <= j; k++) {
      str += arr6[k] + " ";
    }
    console.log(str);
    str = "";

  }
  console.log();
}