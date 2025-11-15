// ############### STRINGS ###############

let str = "My name is Tejas Gawali";
console.log(typeof str);

console.log(str);

console.log("I am Tejas");



// count the number of words in below string 

let words = "This is acciojob skill centre pune";
let wordCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
        wordCount++;
    }
}
console.log(wordCount + 1);




// Different methods in Strings are as follows

// #1. includes() 

console.log(words.includes("accio"));
console.log(str.includes("Tejas"));
console.log(str.includes("tejas"));



// #2. replace() / replaceAll()
// replace the name Tejas with Soham in str

let str1 = str.replace("Tejas", "Soham");
console.log(str1);


// print the string without spaces

let newStr = str.replaceAll(" ", "");
for (let i = 0; i < newStr.length; i++) {
    console.log(newStr[i]);
}


// #3. trim()

let str2 = "     Chaos is a ladder    ";
console.log(str2.trim());



// #4. substring()

console.log(str.substring(3, str.length));
console.log(str.substring(2, 16));
console.log(str.substring(-2));
console.log(str.substring(-2, -4));  // gives a blank or empty
console.log(str.substring(-2, 0));  // gives a blank or empty

console.log(str.substring(5, 2));

console.log(str.substring(8, 3));
console.log(str.substring(10, -3));  // gives [0, 10)


// #5. slice()

console.log(str.slice(2));


// #6 repeat()

console.log("Tejas".repeat(2));    // repeats the string the number of times as passed in the method
// console.log("Tejas".repeat(-2));  // gives error, it is an invalid value 



// #7 charAt()

console.log("it charAt method".toUpperCase());

console.log("vscode".charAt(-2));     // it gives empty or nothing
console.log("vscode".charAt(2));
console.log("abcd".repeat(2.5));  // prints two times the, considers the floor value




// #8 indexOf()

console.log("This is indexOf() method in strings");

console.log("stringMethods".indexOf("string"));
console.log("stringMethods".indexOf("g"));
console.log("stringMethods".indexOf("M"));
console.log("stringMethods".indexOf("z"));  // return -1 if the value passed is not present in the string

console.log("stringMethodsring".indexOf("ring", 7));  // returns the index where "ring" after the index 7 fond or present in the string
console.log("stringMethodsring".indexOf("ring", -7));  // returns the index 2, since passed negative value it converts the negative value to 0
// the above will return ring 2 as the index where it found ring is at index 2 after index 0

