function removeSpaces(text){
   const regex = /^\s+|\s+$/g;
   const result = text.replace(regex, '');
   return result
}

console.log(removeSpaces(' textWithSpaces '));
console.log(removeSpaces(' more text with spaces '));