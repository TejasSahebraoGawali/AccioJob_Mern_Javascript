// print n to 1 by Recursion

function printnto1(n) {
    if (n === 0) return;    // base case to stop the call
    console.log(n);
    printnto1(n - 1);    // call
}
printnto1(4);



// Print 1 to n by Recursion

function print1ton(i, n) {
    if (n >= i) {
        console.log(i);
        print1ton(i + 1, n);
    }
}
print1ton(1, 10);



// Print Hello World

function printHello(n) {
    if (n === 0) return;
    console.log("Hello World");
    printHello(n - 1);
}
printHello(5);


// Print 1 - 5 and 5 - 1 Recursively

function twoWayPattern(n, current) {
    if (current > n) return;
    console.log(current);
    twoWayPattern(n, current + 1);
    console.log(current);
}

twoWayPattern(5, 1);


console.log("########## Two Way Pattern 2 ##########")
function twoWayPatter2(n) {
    if (n === 0) return;
    console.log(n);
    twoWayPatter2(n - 1);
    console.log(n);
}
twoWayPatter2(5);



// function to print sum of 1 to n

function sumOf1Ton(sum, n) {
    if (n === 0) return sum;
    sum = n + (sumOf1Ton(sum, n - 1));
    return sum;
}
console.log(sumOf1Ton(0, 5));


// Function to find the power of  base^power

console.log("Function to find the power of n^8");

function powerOf(base, power) {
    if (power === 0) return 1;
    return base * (powerOf(base, power - 1));
}

console.log(powerOf(2, 3));


// Function to reverse the string Hello

console.log("Function to reverse the string Hello");

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("Hello"));




// Question 1 : Find Factorial of n

console.log("######### Factorial #########")

function findFactorial(n) {
    if (n === 1) return n;
    return n * (findFactorial(n - 1));
}
console.log(findFactorial(5));




// Question 2 : Fiboncci Series for n

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function printFibonacciSeries(count) {
    for (let i = 0; i < count; i++) {
        process.stdout.write(fibonacci(i) + " ");
    }
}
console.log(fibonacci(3));
printFibonacciSeries(10);