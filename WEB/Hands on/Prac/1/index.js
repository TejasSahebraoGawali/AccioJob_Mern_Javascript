function findLargest(a, b, c) {

    let res = "";

    if ((num1 >= num2) && (num1 >= num3)) {
        res = "num1 = " + num1 + " is the largest number";
    }
    else if (num2 >= num3) {
        res = "num2 = " + num2 + " is the largest number";
    }
    else {
        res = "num3 = " + num3 + " is the largest number";
    }
    return res;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
