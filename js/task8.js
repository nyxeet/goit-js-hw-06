const getUsersWithFriend = (users, friendName) => {
    const friendsArray = [];
    users.map(function (user) {
        if(user.friends.some(friend => friend === friendName)) {
            friendsArray.push(user.name)
        }
    })
    return friendsArray;
    
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]