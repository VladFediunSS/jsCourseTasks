function primeCheck(value){
    if (valueCheck(value)){
        const squareRoot = Math.sqrt(value);
    
        if (squareRoot < 2) {
            console.log(`${value} is a prime number.`)
            return;
        }

        const checkList = [];
        for (let i = 2; i <= Math.floor(squareRoot); i++) {
            checkList.push(i);}

        for (i of checkList){
            const rest = value % i;
            //console.log(`value: ${value}, rest: ${rest}`);
            if (rest === 0){
                console.log(`${value} is NOT a prime number.`);
                return;
            }
            }
            console.log(`${value} is a prime number.`);
            return;
    } else {
        console.log('Incorrect input!')
    }
    
    }

function valueCheck(value){
    if (value === Math.floor(value) && value > 0){
        return true;
    } else {
        return false;
    }
}

const scores = [-1, 0, 0.5, 1, 2, 3, 4, 5, 7, 8, 11, 13, 15, 19, 37, 71, 87, 88, 99, 100, 101];

for (i of scores){
    primeCheck(i);
}