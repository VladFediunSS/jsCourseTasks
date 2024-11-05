function deleteItem(arr, item){
    return arr.filter(element => element !== item);
}
console.log(deleteItem([3, 12, 16, 19, 21, 33], 19));