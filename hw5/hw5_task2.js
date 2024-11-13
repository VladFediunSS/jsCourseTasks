const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];

function countCars(cars){
    const carCount = new Map();

    for (let car of new Set(cars)){
        const filteredCars = cars.filter(item => item === car);
        carCount.set(car, filteredCars.length);
    }

    return carCount;
}

console.log(countCars(cars));