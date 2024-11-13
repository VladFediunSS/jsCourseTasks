function toTime(inputValue){
    if(inputValue >= 0 && Math.floor(inputValue) === inputValue && typeof inputValue === 'number'){
        console.log(`${Math.floor(inputValue/60)}:${inputValue % 60}`);
    } else {
        console.log(`Incorrect input: ${inputValue}`);
    }
}

toTime(1000);