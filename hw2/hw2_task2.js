function findElem(arr, el){
    if (arr.includes(el)) {return  true}
    else {return false};
}

const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7)); // false
console.log(findElem(arr, "Alex")); // true