const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890"
    },
    address: {
    city: "New York",
    country: "USA"
    }
    };

 function getUserInfo(obj){
    const {firstName: firstName,
        lastName: lastName,
        contact: {email, phone},
        address:{city}} = obj;
    return {
        firstName,
        lastName,
        email,
        phone,
        city
    };
}
console.log(getUserInfo(user));