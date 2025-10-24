// Some more methods in JavaScript

// #1. split()
let string = "mern stack  course";
console.log(string.split(" "));
console.log(string.split("  "));
console.log(string.split("   "));


let string2 = "mern stack aacourse";
console.log(string2.split("aa"));

let string3 = "mern stackaaacourse";
console.log(string3.split("aa"));
console.log(string3.split(""));


// count the number of words

let words = "   hi my name is tejas and i am here leraning mern stack   ";
console.log(words.trim().split(" ").length);


// #2 join()

let arr = [3, 2, 4, 5];
console.log("Sum of arr: ", arr.join(" "), "is : ", 14);



// Questions on strings

// Given a string, toggle its case 
// input : Hello
// output : hELlO


function toggleCase(str) {
    let n = str.length;
    let toggledStr = "";

    /* Method 1
  
    for (let i = 0; i < n; i++) {
      if (str[i] >= "a" && str[i] <= "z") {
        toggledStr += str[i].toUpperCase();
      } else if (str[i] >= "A" && str[i] <= "Z") {
        toggledStr += str[i].toLowerCase();
      } else toggledStr += str[i];
    } */

    // Method 2.

    for (let i = 0; i < n; i++) {
        if (str[i] === str[i].toLowerCase()) {
            toggledStr += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            toggledStr += str[i].toLowerCase();
        } else toggledStr += str[i];
    }
    return toggledStr;
}

console.log(toggleCase("HelLo78"));


// Write a function to convert camelCase to snake_case


console.log("here we are printing camelCase to snake_case");

function toSankeCase(str) {
    let n = str.length;
    let snake_case = "";
    for (let i = 0; i < n; i++) {
        if (str[i] === str[i].toUpperCase()) {
            snake_case += "_" + str[i].toLowerCase();
        } else {
            snake_case += str[i];
        }
    }
    return snake_case;
}

let str2 = "thisIsCamelCaseNowConvertingToSnakeCase";
console.log(toSankeCase(str2));



// Write a function to convert snake_case to camelCase

function toCamelCase(str) {
    let camelCase = "";
    let n = str.length;

    for (let i = 0; i < n; i++) {
        if (str[i] === "_") {
            i++;
            camelCase += str[i].toUpperCase();
        } else {
            camelCase += str[i];
        }
    }
    return camelCase;
}

let str3 = "this_is_snake_case_now_converting_to_camel_case";
console.log(toCamelCase(str3));



/* Question: extract Jungle from below string using string methods */

let str4 = "   How_are_you_in Jungle!";

console.log("jungle");
console.log(str4.trim().substring(str4.trim().indexOf("Jungle"), str4.trim().indexOf("Jungle") + 6));

// console.log(str4.trim().split(" ")[1].split("!")[0]);


// explore parseInt() and parseFloat() methods


// only use replace() and replaceAll() method and replace "in" with "on" in below string 
// note : Spain should remain as it is


str5 = "Hi are you in Spain, which city are you in?";


console.log(str5.replaceAll(" in", " on"));
str5 = "Hi are you in Spain, How's your pain?";
console.log(str5.replaceAll("in", "on").replace("Spaon", "Spain"));


// function to reverse a string
function reverse(str) {
    let n = str.length;
    let rev = "";

    for (let i = 0; i < n; i++) {
        rev += str[n - 1 - i];
    }
    return rev;
}
let str6 = "Hello";

console.log(reverse(str6));



// function to check if a string is palindrome or not 
str6 = "aba";

function isPlaindrome(str) {
    let n = str.length;

    for (let i = 0; i < n; i++) {
        if (str[i] != str[n - 1 - i]) {
            return false;
        }
    }
    return true;
}


console.log(isPlaindrome(str6));




// check if a string is palindrome or not, ignoring case (lower/upper)

str6 = "Nurses Run";

console.log(
    `checking if "${str}" is palindrome or not (ignoring cases & spaces)`,
    isPalindrome(str.toLowerCase().replaceAll(" ", ""))
);



// lastIndexOf() method

console.log("stringMethodsring".lastIndexOf("s"));


// write a function to find the first non repeating character in a string

// input : "stringMethodsring";
// output : "M"

let str7 = "stringMethodsring";
function firstNonRepChar(str) {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return -1;
}

console.log(firstNonRepChar(str7));



// wrtie a funcion to count the frequency of each character 

function frequencyOfEachChar(str) {
    let freq = {};
    let n = str.length;

    for (let i = 0; i < n; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }

    return freq;
}


console.log(frequencyOfEachChar("stringMethodsring"));
console.log(frequencyOfEachChar("ababd"));


// HW ---> Write a function to find frequency of each word from the given string

// input : "abd ghj abd ghi ghj abc abd"
// output :

// abd : 3
// ghj : 2
// ghi : 1
// abc : 1