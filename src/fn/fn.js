const keys = {
	3: 'Foo',
	5: 'Bar',
	7: 'Qix'
};

/**
 * Function to test
 * @param {number} param Input parameter
 * @returns
 */
export function fn(param) {
	if (typeof param !== 'number') {
		return 'ERROR, NOT A NUMBER';
	} else if (param % 1 !== 0) {
		return 'ERROR, NOT INTEGER';
	}

	let resultStr = '';
	const strNumber = param.toString();

	for (const k in keys) {
		if (param % k === 0) {
			resultStr += keys[k];
		}
	}

	const strArray = strNumber.split('');
	const showDigits = Object.keys(keys).some(k => strArray.indexOf(k) > -1 || param % k === 0);

	resultStr += strArray
		.map(x => keys[x]
			|| (
				x === '0'
					? '*'
					: (
						showDigits
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