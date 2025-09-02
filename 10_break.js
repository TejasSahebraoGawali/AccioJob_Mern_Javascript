
//print first number devisible by 17 in between 100-200
// let n=17;
// for(let i=100;i<200;i++){
//     if( i%n==0){
//         console.log(i,"is devisible by ",n);
//         break;
//     }
// }

// continue
// n=17;
// for(let i=0;i<=100;i++){
//     if(i%n==0){
//        continue;
//     }
//     console.log(i,"square is ",i**2);
// }

// print all odd number from 1 to 200 that are divisible by 5- use continue

// n=100;
// for(let i=1;i<n;i++){
//     if(i%5!=0 || i%2==0){
//         continue;
//     }
//     console.log(i);
// }

// print frist 10 odd number from 1 to 200 that are divisible by 5
n=100;
let count=0;
for(let i=1;i<n;i++){
    if(count==10){
        break;
    }
    if(i%5!=0 || i%2==0){
        continue;
    }
    console.log(i);
    count++;
}
