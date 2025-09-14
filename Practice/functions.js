// Average of three numbers

function averageOfThree(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
}

console.log(averageOfThree(12, 5, 7));



// Factorial of a number

function factorialOfNumber(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialOfNumber(3));

// write a program to find nCr 

function nCr(n, r) {
    if (r > n) {
        return 0;
    }
    return factorialOfNumber(n) / (factorialOfNumber(n - r) * factorialOfNumber(r));
}

console.log(nCr(5, 3));