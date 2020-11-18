const getSortedUniqueSkills = users => {
    const getSkills = [];
    users.map(function (user) {
        user.skills.forEach(function (skill) {
            if (!getSkills.some(newSkill => newSkill === skill)) {
                getSkills.push(skill);
            }   
        })
    })
    return getSkills.sort();

};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]