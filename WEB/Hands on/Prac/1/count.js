function countLetters(str) {
  const map = new Map();

  for (let char of str) {
    if (char === " ") continue; // ignore spaces

    char = char.toLowerCase();

    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

const result = countLetters("Hello World");
console.log(result);
