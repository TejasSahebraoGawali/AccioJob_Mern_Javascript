//it is run at one even there is condition is false
// it will run at least one time 
const prompt = require('prompt-sync')();



// do{
//     console.log("hii bro");
// }
// while(false);

let i=5;
do{
    console.log("hii bro");
}
while(i<3);

//even i is greater than 3 it run code at once

const resp=prompt("what do you want : ");
console.log({resp})