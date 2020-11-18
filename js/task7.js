const calculateTotalBalance = users => {
    
    const totalBalance = users.reduce(function (balance, user) {
        return balance + user.balance;
    }, 0)
    return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916