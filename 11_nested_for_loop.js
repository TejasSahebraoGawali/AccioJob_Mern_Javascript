// write a program to print 10  of( 10  starts(*))

// for(let i=0;i<10;i++){
//     let str="";
//     for(let j=0;j<10;j++){
//         str+="*";
//     }
//     console.log(str);
// }

//print patter 
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6

// let n=6
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=n;j++){
//         str+=j+" ";
//     }
//     console.log(str);
// }



n=5;
for(let i=0;i<n;i++){
    let str="";
    for(let j=n;j>i;j--){
        str+="*";
    }
    console.log(str);
}

n=6;
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+=j+" ";
    }
    console.log(str)
}

