const calculateTotalBalance = users => {
    
    return users.reduce(function (balance, user) {
        return balance + user.balance;
    }, 0)
};

console.log(calculateTotalBalance(users)); // 20916