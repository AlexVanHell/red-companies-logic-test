const keys = {
	3: 'Foo',
	5: 'Bar',
	7: 'Qix'
};

/**
 * Transform a number parameter into a string according to the next logic
 * If number is divisible by 3 write "Foo" instead of the number
 * If number is divisible by 5 add "Bar"
 * If number is divisible by 7 add "Qix"
 * For each digit 3, 5 or 7 add "Foo", "Bar", "Qix" in the digits order
 * Keep a trace of 0 in numbers each 0 must be replaced by char "*"
 * @param {number} param Input parameter
 * @returns {string} Resulting string
 */
export function fn(param) {
	if (typeof param !== 'number') {
		return 'ERROR, NOT A NUMBER';
	} else if (param % 1 !== 0) {
		return 'ERROR, NOT INTEGER';
	}

	let resultStr = '';
	const strNumber = param.toString();

	// If param is divisible by 3, 5 and/or 7 add its corresponding word
	for (const k in keys) {
		if (param % k === 0) {
			resultStr += keys[k];
		}
	}

	// Transform our string into array of characters
	const strArray = strNumber.split('');

	/** Need to check if it needs to show digits
	 * Examples:
	 * 	- 407 must be *Qix instead of 4*Qix
	 * 	- 431 must be Foo instead of 4Foo1
	 * 	- 617 must be Qix instead of 61Qix
	 */
	const emptyDigits = Object.keys(keys).some(k => strArray.indexOf(k) > -1 || param % k === 0);

	// If keys[x] is a falsy value (null, undefined) it will take the right side sentence as a default value
	resultStr += strArray
		.map(x => keys[x]
			|| (
				x === '0'
					? '*'
					: (
						emptyDigits
							? ''
							: x
					)
			)
		)
		.join('');

	if (resultStr === '') {
		return param.toString();
	}

	return resultStr;
}