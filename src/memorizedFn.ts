type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let memo: {
        [key: string]: number
    } = {};

    return function (...args) {
        const key = args.join('-');
        const memorizedValue = memo[key];

        if (memorizedValue !== undefined) {
            return memorizedValue;
        } else {
            const value = fn(...args);
            memo[key] = value;
            return value;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */