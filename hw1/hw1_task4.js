function result1(score){
    if(score >= 0 && score < 50){
        console.log('Unsatisfied!')
    } else if (score >= 50 && score < 71) {
        console.log('Satisfied!')
    } else if (score >= 71 && score < 88) {
        console.log('Good!')
    } else if (score >= 88 && score <= 100) {
        console.log('Excellent!')
    } else {
        console.log('Incorrect assessment!!')
    }
}

function result2(score){
    switch (true) {
        case (score < 0):
            console.log('Incorrect assessment!!')
            break;
        case (score <= 49):
            console.log('Unsatisfied!')
            break;
        case (score <= 70):
            console.log('Satisfied!')
            break;
        case (score <= 87):
            console.log('Good!')
            break;
        case (score <= 100):
            console.log('Excellent!')
            break;
        case (score > 100):
            console.log('Incorrect assessment!!')
            break;
    }
}
const scores = [-1, 0, 1, 49, 50, 70, 71, 87, 88, 99, 100, 101];

for (i of scores){
    console.log(i);
    result1(i);
    result2(i);
}
