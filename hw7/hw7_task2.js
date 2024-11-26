function findCapitalWords(sentence){
    const regex = /\b[A-Z][a-z]*\b/g;
    return sentence.match(regex) || [];
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
console.log(findCapitalWords("no capital letter here"));