const getUsersWithEyeColor = (users, color) => {
    const getUsersColor = users.filter(user => 
        user.eyeColor === color)
    return getUsersColor;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]