function identity(items) {
    if (items.length === 0) {
        return 0;
    }
    var ratingSum = items.reduce(function (sum, item) { return sum + item.rating; }, 0);
    return ratingSum / items.length;
}
console.log(identity([{ name: "Anna", rating: 3 }])); // 3
console.log(identity([{ title: "Encounter", rating: 3 }, { title: "Dead to me", rating: 4 }, { title: "Riverdale", rating: 5 }])); // 4
