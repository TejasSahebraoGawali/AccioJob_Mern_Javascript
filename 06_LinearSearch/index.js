function maximumFrequencyChar(s) {
    let maxFreq = 0;
    let freqMap = {};

    for (let char of s) {
        (freqMap[char] = (freqMap[char] || 0) + 1);
        if (freqMap[char] > maxFreq) {
            maxFreq = freqMap[char];
        }
    }

    let chars = [];
    for (let char in freqMap) {
        if (freqMap[char] === maxFreq) {
            chars.push(char);
        }
    }
    chars.sort();
    return chars[0];
}

console.log(maximumFrequencyChar("abcdabbccdd"));