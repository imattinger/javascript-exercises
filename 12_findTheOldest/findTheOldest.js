const findTheOldest = function(people) {
    const oldestToYoungest = people.sort((a, b) => {
        return getAge(a) > getAge(b) ? -1 : 1;
    });
    console.table(oldestToYoungest);
    return oldestToYoungest[0];
};

function getAge(person) {
    const birth = person.yearOfBirth;
    const death = person.yearOfDeath || new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
