async function loadUserProfile(userId){
    return {
        profile: await fetchUserProfile(userId),
        posts: await fetchUserPosts(userId)
    };
}

async function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve({ userId: userId, name: "John Doe", age: 30 })
        }, 1000);
        });
}
    
async function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
            { postId: 1, content: "Hello, world!" },
            { postId: 2, content: "Loving this app!" }
            ])
        }, 2000);
        });
}

    loadUserProfile(1)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));