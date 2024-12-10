function display(param1:string):void
function display(param1:string, param2:string):void
function display(param1:string[]):void

function display(param1:string|string[], param2?:string):void{
    if (typeof param1 === 'string' && param2 === undefined){
        console.log(param1);
    }
    if (Array.isArray(param1)){
        param1.forEach(element => console.log(element));
    }
    if (typeof param1 === 'string' && typeof param2 === 'string'){
        console.log(param1);
        console.log(param2);
    }
    
    
}

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);