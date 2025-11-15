// some more methods on strings 

// #9 split()

let string = "mern stack course";
console.log(string.split(" "));

string = "mern stack  course";
console.log(string.split("  "));

string = "mern stack  course";
console.log(string.split("   "));  // here we passed a value that is not present in the string so it returns the whole string itself

string = "mern stack  course";
console.log(string.split("z"));  // here we passed a value that is not present in the string so it returns the whole string itself

string = "mern stack aacourse";
console.log(string.split("aa"));   // it splits the string at passed string in the split method

console.log(string.split(""));
// since we passed an empty value or string in the method we got an array of the original elements
// of the string split in individual elements of an array

string = "mern stackaaacourse";
console.log(string.split("aa"));  // here it considers only first aa as the point to split the string


// code to count the number of words in the string

let words = "    hi my name is tejas and i am here learning mern stack   ";
console.log(words.trim().split(" ").length);
// it does so because it first trims the preceeding and trailing spaces and
// then splits the string by the spaces as passed in the split method 
// since the string is split now and returned in the form of an array 
// now the length method is used to count the words as individual elements of an array


// #10 join()  // joins the elements of an array using the values or charcters passed to it the method

let arr = [3, 2, 4, 5];
console.log(arr.join(","));
console.log("Sum of arr: ", arr.join(" "), "is :", 14);

console.log(words.trim().split(" ").join(","));


// Given a string, toggle its case 
// input : HelLo78
// output : hELlO78


function toggleCase1(str) {
    let n = str.length;
    let toggleStr = "";

    for (let i = 0; i < n; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
            toggleStr += str[i].toUpperCase();
        }
        else if (str[i] >= "A" && str[i] <= "Z") {
            toggleStr += str[i].toLowerCase();
        } else {
            toggleStr += str[i];
        }
    }
    return toggleStr;
}

console.log(toggleCase1("HelLo78"));



function toggleCase2(str) {
    let n = str.length;
    let toggleStr = "";

    for (let i = 0; i < n; i++) {
        if (str[i] === str[i].toLowerCase()) {
            toggleStr += str[i].toUpperCase();
        }
        else if (str[i] === str[i].toUpperCase()) {
            toggleStr += str[i].toLowerCase();
        }
        else {
            toggleStr += str[i];
        }
    }
    return toggleStr;
}


console.log(toggleCase2("Tejas GAWALi"));



// Write a function to convert camelCase to snake_case
// TC -> O(N), SC -> O(N)

function camelToSnakeCase(camelCase) {
    let n = camelCase.length;
    let snake_case = "";

    for (let i = 0; i < n; i++) {
        if (camelCase[i] === camelCase[i].toUpperCase()) {
            snake_case += "_" + camelCase[i].toLowerCase();
        }
        else {
            snake_case += camelCase[i];
        }
    }
    return snake_case;
}

console.log(camelToSnakeCase("camelCase"));



// write a function to convert snake_case to camelCase
// TC -> O(N), SC -> O(N)

function snakeToCamelCase(snake_case) {
    let n = snake_case.length;
    let camelCase = "";

    for (let i = 0; i < n; i++) {
        if (snake_case[i] === "_") {
            i++;
            camelCase += snake_case[i].toUpperCase();
        }
        else {
            camelCase += snake_case[i];
        }
    }
    return camelCase;
}

console.log(snakeToCamelCase("snake_case"));



function camelToSnakeCase1(camelCase) {
    let n = camelCase.length;
    let snake_case = "";

    for (let i = 0; i < n; i++) {
        if (camelCase[i] === camelCase[i].toUpperCase()) {
            snake_case += "_" + camelCase[i].toLowerCase();
        }
        else {
            snake_case += camelCase[i];
        }
    }
    return snake_case;
}

console.log(camelToSnakeCase1("tejasGawali"));
console.log(camelToSnakeCase1("TejasGawali"));

console.log(snakeToCamelCase("_tejas_gawali"));





/* Question: extract Jungle from below string using string methods */

let str = "   How_are_you_in Jungle!  ";


// trimming and outputing with trimmed string

console.log(str.trim().substring(str.trim().indexOf("Jungle"), str.trim().indexOf("Jungle") + 6));


// taking index with trimming string but outputing with original string

console.log(str.substring(str.trim().indexOf("Jungle"), str.trim().indexOf("Jungle") + 6));
// here in the above we trim the original string and then when at the time of printing the extracted string
// we consider here the origianl string not the trimmed one so it give different output than desired
// output it give is : 'in Jun' 
// cause the index it got earlier was for trimed string but it gives substring for original string



// outputing with original string

console.log(str.substring(str.indexOf("Jungle"), str.indexOf("Jungle") + 6));


// outputing with trimmed string but when taking index using original string

console.log(str.trim().substring(str.indexOf("Jungle"), str.indexOf("Jungle") + 6));
// output : gle!


console.log(str.trim().split(" ")[1].split("!")[0]);
// here it first it trims the original string then splits the original string by spaces " "
// when it returns and array it then again splits the element at index 1 by "!" then 
// traverse to index 0 of the array returned by last split method printing this would give the desired output

str = "   How_are_you_in Jungle  ";
console.log(str.trim().split(" ")[1]);




// #11 parseInt() method ---> this method simply converts the string into inter type
console.log("Here we are learning partInt() method");

let str1 = "56";
console.log(typeof (str1));

str1 = "";
console.log(parseInt(str1));
console.log(typeof (str1));

str1 = " ";
console.log(parseInt(str1));
console.log(typeof (str1));

str1 = "56";
console.log(typeof (str1));
// console.log(parseInt(str1));
console.log(typeof (parseInt(str1)));


// #12 parseFloat() method ---> similary it converts the string into float
console.log("Here we are learning parseFloat() method");

let str2 = "56";
let abc = parseFloat(str2);
console.log(typeof abc);

console.log(parseFloat("56"));
console.log(parseFloat("56.78"));
console.log(parseFloat("56abc"));
console.log(parseFloat("abc56"));
console.log(parseFloat("   12.3"));
console.log(parseFloat("-0.45"));


let str3 = 27.5;
console.log(typeof str3);


// parseInt("56.5625")  ---->  56       typeof ---> number   
// parseInt() only parses the integer part of the string, stops at the decimal point

// parseFloat("56.5625")  ---->  56.5625   typeof ---> number

// the typeof will always give number,in js integers or decimals are of type number




// only use replace() and replaceAll() method and replace "in" with "on" in below string 
// note : Spain should remain as it is


str = "Hi are you in Spain, which city are you in?";
console.log(str);
console.log(str.replaceAll(" in", " on"));

let str5 = "Hi are you in Spain, How's your pain?";
console.log(str5.replaceAll("in", "on").replace("Spaon", "Spain"));

console.log(str.replace("Spain", "X").replaceAll("in", "on").replace("X", "Spain"));




// function to reverse a string

function reverseString(str) {
    let n = str.length;
    let newStr = "";

    for (let i = n - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
}

reverseString(str);



// function to check if a string is palindrome or not 

function isPalindrome(str) {
    let n = str.length;

    for (let i = 0; i < n; i++) {
        if (str[i] != str[n - 1 - i]) {
            return false;
        }
        return true;
    }
}
console.log(isPalindrome("aba"));



// lastIndexOf() method

console.log("stringMethodsring".lastIndexOf("s"));



// write a function to find the first non repeating character in a string
// input : "stringMethodsring";
// output : "M"

function firstNonRepChar(str) {
    n = str.length;
    str = str.trim().toLowerCase();

    for (let i = 0; i < n; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return -1;
}

str = "aabbccccbbaa";
console.log(firstNonRepChar(str));



/* write a function to count the frequency of each character */

function charFrequency(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}
console.log(charFrequency(str));



// frequency of each char using for...of loop

function freqOfEachChar(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

str = "Hello World!";
console.log(freqOfEachChar(str));

// const freq = {};
// console.log(freq.__proto__);


/* H.W -> Write a function to find frequency of each word from the given string 

input: "abd ghj abd ghi ghj abc abd"
output:  

abd: 3
ghj: 2
ghi: 1
abc: 1

*/

function wordFrequency(str) {
    const freq = {};
    let words = str.split(" ");

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }
    for (let word in freq) {
        console.log(`${word}: ${freq[word]}`);
    }
}

str = "abd ghj abd ghi ghj abc abd";
wordFrequency(str);


function reverseString(str) {
    let rev = str.split(" ").reverse().join(",");
    console.log(rev);
}

reverseString("Hello my name is Tejas Gawali");