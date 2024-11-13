function updateCart(cart, newItem){
    const updatedCart = [];
    const {id, name, quantity} = newItem;
    const foundItem = cart.find(item => item.id === id);
    if (foundItem){
        foundItem.quantity += quantity;
    } else {
        cart.push(newItem);
    }

    return cart;
};

const cart = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Smartphone", price: 800, quantity: 2 },
    ];

console.log(updateCart(cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 }));
console.log(updateCart(cart, { id: 3, name: "Tablet", price: 600, quantity: 1 }));