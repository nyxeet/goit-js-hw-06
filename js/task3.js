const getUsersWithGender = (users, gender) => {
    const genderArray = [];
    users.map(user => {
        if (user.gender === gender) {
            genderArray.push(user.name)
        }
    })
    return genderArray;
    
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]