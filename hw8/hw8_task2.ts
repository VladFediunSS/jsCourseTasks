function processData(param:string|number|boolean|number[]):string|number|boolean|number[]{
    if(typeof param === 'string'){
        return param.toUpperCase();
    } else if (typeof param === 'number'){
        return param*param;
    }else if (typeof param === 'boolean'){
        return !param;
    }else if (Array.isArray(param)){
        return param.map(element => element*element) || [];
    }
}

console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // Empty array: []