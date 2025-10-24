/* ============== Strings ============== */
let str1 = "Hi, I'm Vaibhav";
let str2 = "Hi, I'm Vaibhav";
let str3 = `Hi, I'm "Vaibhav"`;
let str4 = 'Hi, Im "Vaibhav"';
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4); //all are strings

/* Printing a string */
console.log(str1);

for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

/* Strings are Immutable --> we cannot change the value of string literals  */
str4[0] = "Y"; //this will not change the str4
console.log(str4);
str4 = "Y"; //this can be done
console.log(str4);


// count the number of words in below string.

let words = "Hi how was your day";
let wordCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
        wordCount++;
    }
}
console.log(wordCount + 1);



// Methods in string 

// includes() ---> checks if a substring is present in the string or not
console.log("baloon".includes('oon'));  // can also search for a string of more than or equal to 1 length
console.log("baloon".includes('ooN'));  // it's case sensitive in nature


// replace() ---> only replaces the first value of the target string with new value
let str = "shoes";
console.log(str.replace("s", "d"));   // returns a new string, doesn't change the original


// replaceAll() ---> raplaces all the occurances of target with new value
str = "shows";
console.log(str.replaceAll("s", "a"));  // returns a new string, doesn't change the original string


// trim() ---> removes all the leading and trailing spaces
console.log("    osdlkfj     jsdkj  kjfksj sjdfkj     ".trim());    // returns a new string, doesn't change the original string


// substring() ----> gives a substring based on various conditions specified to it

console.log("abhishek".substring(2));        // gives substring from index = 2 to last index | [2, n)
console.log("abhishek".substring(2, 6));    // gives substring from index = 2 to 5 | [2, 5] | [2, 6)
console.log("abhishek".substring(-2));    // (converts negative values to 0) gives substring from [0, n)
console.log("abhishek".substring(-2, 6));    // [0, 6)
console.log("abhishek".substring(5, 2));    // [2, 5)
console.log("abhishek".substring(5, -3));    // [0, 5)


// slice() --->  works same as slice in arrays -- gives the string from the given index
console.log("acciojob".slice(2));   // [2, n)
console.log("acciojob".slice(-2));   // gives exactly 2 characters from end
console.log("acciojob".slice(4, -2));   // oj ---> starts at 4th index, ends before last 2 characters
console.log("acciojob".slice(-7, -2));   // starts from the 7th element from end, and ends before 2nd element from end


// repeat()   ----> repeats the given string the number of times passed in the methond
console.log("abcd".repeat(4));

console.log("abcd".__proto__);   // consoles the wrapper object details  &  it always considers the given string as empty and so always give the length as 0


// charAt()   ---->   returns the character at the the given index
console.log("vscode".charAt(2));
// console.log("vscode".charAt(-2));   // gives empty or nothing

// indexOf()  ----> returns the index/staring index of the value or the string passed 
console.log("stringMethods".indexOf("r"));        // returns the index where r is found in the string
console.log("stringMethods".indexOf("ring"));     // returns the index where "ring" is found in the string
console.log("stringMethodsring".indexOf("ring", 7));  // returns the index where "ring" after the index 7 fond or present in the string


