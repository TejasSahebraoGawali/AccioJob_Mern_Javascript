let n = 4;
let isPrime = true;
if (n < 2) {
    isPrime = flase;
}
else {
    for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(n, "is a prime number");
}
else {
    console.log(n, "is not a prime number");
}