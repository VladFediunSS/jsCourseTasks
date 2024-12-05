function superSort(arr, direction) {
    var sorted = [];
    if (direction === 'asc') {
        sorted = arr.slice().sort(function (a, b) { return a.localeCompare(b); });
    }
    else if (direction === 'desc') {
        sorted = arr.slice().sort(function (a, b) { return b.localeCompare(a); });
    }
    else {
        console.log("Incorrect direction.");
    }
    return sorted;
}
var names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
console.log(superSort(names, "desc"));
//[ 'Alex', 'Ira', 'Nina', 'Vlad' ]
var func = superSort;
var result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// [ 'D', 'C', 'B', 'A' ]
