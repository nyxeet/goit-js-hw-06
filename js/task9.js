const getNamesSortedByFriendsCount = users => {
    const newUsers = [...users]; // чтобы не изменялся дефолтный массив
    const namesUsers = [];
    newUsers.sort(function (prevUser, nextUser) {
        return prevUser.friends.length - nextUser.friends.length;
        
    }).map(function (user) {
        namesUsers.push(user.name);
    })
    
    return namesUsers;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]