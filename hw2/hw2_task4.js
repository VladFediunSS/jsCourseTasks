function getCircleLength(r){
    if (r <= 0 || typeof r !== 'number' || isNaN(r)){
        throw new Error('Incorrect radius - please, enter numeric value!')
    } else {
        return 2 * Math.PI * r;
    }
}

console.log(getCircleLength(2));
// console.log(getCircleLength(-1));
// console.log(getCircleLength(0));
//console.log(getCircleLength('seven'));