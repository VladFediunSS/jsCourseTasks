function display(param1, param2) {
    if (typeof param1 === 'string' && param2 === undefined) {
        console.log(param1);
    }
    if (Array.isArray(param1)) {
        param1.forEach(function (element) { return console.log(element); });
    }
    if (typeof param1 === 'string' && typeof param2 === 'string') {
        console.log(param1);
        console.log(param2);
    }
}
display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);
