const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("d");

let text = "";

for (const x of letters) {
    text += x + " ";
}
console.log(text);






function difference(firstSet, secondSet) {
    let differenceSet = new Set(firstSet);
    for (let item of secondSet) {
        differenceSet.delete(item);
    }
    return differenceSet;
}


console.log("difference using custom implementaion");
difference(firstSet, secondSet);



// intersection of elements using custom implementation


function union(firstSet, secondSet) {

    let unioinSet = new Set(firstSet);

    for (let item of secondSet) {
        unioinSet.add(item);
    }
    return firstSet;
}


function intersection (firstSet, secondSet) {
    const intersectionSet = new Set();

    for(let item of secondSet) {
        if(firstSet.has(item)) {
            intersectionSet.add(item);
        }
    }
    return intersectionSet;
}



console.log()