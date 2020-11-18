const getUsersWithFriend = (users, friendName) => {
    const friendsArray = [];
    users.map(function (user) {
        user.friends.map(function (friend) {
            if (friend === friendName) {
                friendsArray.push(user.name);
            }
        })
    })
    return friendsArray;
    
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]