"use strict";
const canSum = (arr, targetSum) => {
    const numSet = new Set();
    for (let num of arr) {
        const complement = targetSum - num;
        if (numSet.has(complement)) {
            return true;
        }
        numSet.add(num);
        console.log(num);
    }
    return false;
};
console.log(canSum([1, 2, 3, 4, 5, 6], 6));
// console.log(canSum([1, 2, 3, 4, 5, 6], 10));
