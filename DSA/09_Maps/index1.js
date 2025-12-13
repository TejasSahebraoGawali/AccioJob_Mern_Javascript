// maps in javascript



let map = new Map();

map.set("a", 1);
map.set("b", 2);

console.log("values", map.values());
console.log("keys", map.keys());

for (let item of map) {
    console.log(item);
}

for (let [key, value] of map) {
    console.log(key, value);
}


map.forEach((value, key) => {
    console.log("using foreach", key, value);
});

console.log("alues using foreach");

map.values().forEach(val => console.log(val));
console.log("keys using foreach");
map.keys().forEach(val => console.log(val));


let simpleFruits = new Map([]);

let dicitonaryFruits = new Map([
    ["a", ["apple", "apricot"]],
    ["b", ["banana"]],
    ["g", ["grapes", "guava"]]
]);

dicitonaryFruits.set("d", ["dragon fruit"]);



// find frequency of each word in given string 
console.log("find frequency of each word in given string");



let sentence = "how many repeating words are there in this sentence which has repeating words";


function repeatingWords(sentence) {
    const words = sentence.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/);

    const map = new Map();

    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    const repeating = [];

    for (const [word, count] of map) {
        if (count > 1) {
            repeating.push({ word, count });
        }
    }
    return repeating;
}

console.log(repeatingWords(sentence));