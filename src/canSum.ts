const canSum = (arr:number[], targetSum:number):string => {
    const numSet = new Set();

    for (let num of arr) {
        const complement = targetSum - num;

        console.log(num);
        if (numSet.has(complement)) {
        return `${num} + ${complement}`;
        }

        numSet.add(num);
    }

    return '';
};

console.log(canSum([1, 2, 3, 4, 5, 6], 8));
// console.log(canSum([1, 2, 3, 4, 5, 6], 10));