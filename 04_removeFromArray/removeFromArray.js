const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((elem)=>{return !toRemove.includes(elem)});
};

// Do not edit below this line
module.exports = removeFromArray;

/*
Previous solution: shows how Array.filter() works

const removeFromArray = function(arr, ...toRemove) {
    let filterFunction = function(element) {
        return !toRemove.includes(element);
    }
    return arr.filter(filterFunction);
};
*/