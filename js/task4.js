const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]