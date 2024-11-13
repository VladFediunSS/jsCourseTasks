for (let i = 1; i<=50; i++){
    const divisionTwo = i % 2;
    const divisionFour = i % 4;
    if (divisionFour === 0 && divisionTwo === 0){
        console.log(`${i} kratne 2 & 4!`)
    } else if (divisionFour === 0){
        console.log(`${i} kratne 4!`)
    } else if (divisionTwo === 0){
        console.log(`${i} kratne 2!`)
    } else {
        console.log(i);
    }

}

