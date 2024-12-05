function superSort(arr:string[], direction:string):string[]{
    let sorted:string[] = [];
    if (direction === 'asc'){
       sorted = arr.slice().sort((a,b)=> a.localeCompare(b))
    } else if (direction === 'desc'){
        sorted = arr.slice().sort((a,b)=> b.localeCompare(a))
    } else {
        console.log("Incorrect direction.")
    }
    return sorted;
}

type SortFunction = (arr:string[], direction:string) => string[];

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
console.log(superSort(names, "desc"));
//[ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// [ 'D', 'C', 'B', 'A' ]