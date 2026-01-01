function subset(array) {
    const result = [];
    const currentSol = [];

    function backtrack(start) {
        result.push([...currentSol]);

        for (let i = start; i < array.length; i++) {
            currentSol.push(array[i]);

            backtrack(i + 1);
            currentSol.pop();
        }
    }
    backtrack(0);
    return result;
}

let arr = [1, 2, 3];
console.log(subset(arr));