function getLetterCount(text) {
    const regex = /[a-zA-Z]/g;
    const letters = text.match(regex);
    const count = {};

    if (letters) {
        for (const letter of letters) {
            const smallLetter = letter.toLowerCase();
            count[smallLetter] = count[smallLetter] ? (count[smallLetter] + 1) : 1;
        }
    }

    return count;
}

console.log(getLetterCount("banana"));

// { b: 1, a: 3, n: 2 }

console.log(getLetterCount("The short text"));

// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }