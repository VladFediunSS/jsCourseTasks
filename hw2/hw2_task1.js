function processData(num1=0, num2=0, action='sum'){
    switch(true){
        case (action === 'sum'): return num1 + num2;
        case (action === 'product'): return num1 * num2;
        case (action === 'square'): return num1 ** num2;

    }
}

console.log(processData());
console.log(processData(3,2));
console.log(processData(3,2,'sum'));
console.log(processData(3,2,'product'));
console.log(processData(3,2,'square'));