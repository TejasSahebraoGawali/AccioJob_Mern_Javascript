// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");



/*

Issuse is that repeating code
-to much work
- human error 
-unable to count number of repeattion
-problem of redability
-to much work to update
to solve this issue we have loops 
-while
-for
this are loops we have

*/



// while loop

// let i=0;
// while(i<10){
//     console.log("hii");
//     i++;
// }
// Time complexity O(i)


// counting 1-10 by while loop
// let ptr=1;
// while(ptr<=10){
//     console.log(ptr);
//     ptr++;
// }

//print even number till 25
let number = 2;
// while(number<=25){
//     console.log(number)
//     number+=2;
// }
// time complexity -> O(25)

// print count down from 10 to 1
// number=10;
// while(number>=1){
//     console.log(number);
//     number--;
// }
// time complexity -O(number)

// print multiples of three  upto 50 by for loop
// for(let i=1;i<50;i++){
//    if(i%3==0){
//      console.log(i);
//    }
// }
// time complexity -O(50)


// for(let i=0;i<50;i+=3){
//      console.log(i);
// }
//tim complexity O(50)


// print the square of each number from 20 to 35
// let n=35;
// let i=20;
// while(i<n){
//     console.log(i,"suqare is ",i*i);
//     i++;
// }
// time coplexity - O(16)-wrong

// for(i;i<=n;i++){
//      console.log(i,"suqare is ",i*i);
//     i++;

// }
// time coplexity - O(16)-wrong

// let start=20;
// let n=15;
// for(let i=start;i<(start+n);i++){
//     console.log(i,"square is ",i**2);
// }
// time complexity is -O(n) - [start+n]-start;

//print the 5 table
// number=5;
// for(let i=1;i<=10;i++){
//     console.log(number,"*",i,"=",i*number)
// }

// time complexity O(10)


//sum of  first 100 number

// let sumOfNumbers=0;
// let n=100
// for (let i=0;i<=n;i++){
//     sumOfNumbers+=i;
// }
// console.log("sum of first 100 numbers is ",sumOfNumbers)
//time complexity is = O(n)

// const n1=false&&5;//false && true=false
// const n2=n1===false;//false===false=>true;
// const n3=n2&&67;//true&&
// const n4=true && n2!=34 && n1==false
// console.log({n1,n2,n3,n4})


// const n1 = false && 5;//false && true=false
// const n2 = n1 === false && 34;//false===false=>true;
// const n3 = n2 && 67;//true&&
// const n4 = true && n2 != 34 && n1 == false
// console.log({ n1, n2, n3, n4 })
