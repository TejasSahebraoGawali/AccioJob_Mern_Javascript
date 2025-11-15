function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function primeInRange(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

primeInRange(1, 15);