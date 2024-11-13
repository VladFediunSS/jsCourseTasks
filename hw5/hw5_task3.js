const user1 = {name:'admin', password: 'qwerty123456'};

function checkLogin(username, password){
    const checkCredentials = new Promise(function (resolve, reject){
        setTimeout(() => {
            if (username === user1.name && password === user1.password) {
                resolve(`Welcome, ${username}.`);
            } else {
                reject('Invalid username or password');
            }
        }, 2000);
    });
    return checkCredentials;
    }

checkLogin("admin", "qwerty123456")
.then((message) => console.log(message))
.catch((error) => console.log(error));

checkLogin("admin1", "qwerty")
.then((message) => console.log(message))
.catch((error) => console.log(error));