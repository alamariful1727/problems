const canSum = (arr:number[], targetSum:number):boolean => {
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }

    for (let num of arr) {
        const remainder = targetSum - num;
        if (canSum(arr, remainder) === true) {
            return true;
        }
    }

	return false;
};

console.log(canSum([1, 2, 3, 4, 5, 6, 7], 6)); // Output: true

