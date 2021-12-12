function curriedAdd(total) {
	let sum = 0;
	const returnFunc = num => {
		if (num) {
			sum += num;
			return returnFunc;
		}
		return sum;
	};
	return returnFunc(total);
}

module.exports = { curriedAdd };
