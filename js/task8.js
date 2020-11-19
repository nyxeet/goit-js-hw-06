const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// old version

// users.map(function (user) {	
//         if(user.friends.some(friend => friend === friendName)) {	
//             friendsArray.push(user.name)	
//         }	
//     })	
//     return friendsArray;	

// };