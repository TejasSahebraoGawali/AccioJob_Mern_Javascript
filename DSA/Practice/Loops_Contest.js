// ################ CONTEST ################

// Question 1:

// Problem : Sum of Cubes of Digits





// Question 2:

// Problem : Prime Numbers in Range

// let n = 13;

// ------------------ method 1 ------------------ 
// for (let i = 2; i <= n; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             count++;
//         }
//     }
//     if (count === 2) {
//         console.log(i);
//     }
// }

// ------------------ method 2 ------------------
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function primesInRange(n) {
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

primesInRange(13);


// Question 3:

// Problem : Print Hollow Diamond Pattern
//  Loops

 