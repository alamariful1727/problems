type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	const [a, b] = await Promise.all([promise1, promise2])

    return a + b;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

Promise.allSettled([Promise.resolve(2), Promise.reject(2)]).then(results => 
    results.forEach(result => console.log(result))
)