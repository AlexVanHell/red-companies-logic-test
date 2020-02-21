import { fn } from './fn';

describe('fn function', () => {
	test('send "ERROR, NOT A NUMBER" message if input is not a number', () => {
		const inputs = ['hello', [], {}, null, undefined];

		for (const input of inputs) {
			expect(fn(input)).toBe('ERROR, NOT A NUMBER');
		}
	});

	test('send "ERROR, NOT INTEGER" message if input is not an integer', () => {
		const inputs = [0.2, 1.4, 45.78, 43.90];

		for (const input of inputs) {
			expect(fn(input)).toBe('ERROR, NOT INTEGER');
		}
	});

	test('replace number with "Foo" if it is divisible by 3', () => {
		const inputs = [6, 9, 12];

		for (const input of inputs) {
			expect(fn(input)).toBe('Foo');
		}
	});

	test('replace number with "Bar" if it is divisible by 5', () => {
		const inputs = [10];

		for (const input of inputs) {
			expect(fn(input)).toBe('Bar*');
		}
	});

	test('replace number with "Qix" if it is divisible by 7', () => {
		const inputs = [14];

		for (const input of inputs) {
			expect(fn(input)).toBe('Qix');
		}
	});

	test('for each digit "3" replace with "Foo"', () => {
		const inputs = [3, 33, 333, 3333];
		const outputs = ['Foo', 'FooFoo', 'FooFooFoo', 'FooFooFooFoo'];

		for (let i = 0; i < inputs.length; i++) {
			// As every element in inputs array is divisible by 3 it must add also another "Foo" at begining in each case
			expect(fn(inputs[i])).toBe(`Foo${outputs[i]}`);
		}
	});

	test('for each digit "5" replace with "Bar"', () => {
		const inputs = [5, 55, 5555];
		const outputs = ['Bar', 'BarBar', 'BarBarBarBar'];

		for (let i = 0; i < inputs.length; i++) {
			// As every element in inputs array is divisible by 5 it must add also another "Bar" at begining in each case
			expect(fn(inputs[i])).toBe(`Bar${outputs[i]}`);
		}
	});

	test('for each digit "7" replace with "Qix"', () => {
		const inputs = [7, 77, 7777];
		const outputs = ['Qix', 'QixQix', 'QixQixQixQix'];

		for (let i = 0; i < inputs.length; i++) {
			// As every element in inputs array is divisible by 7 it must add also another "Qix" at begining in each case
			expect(fn(inputs[i])).toBe(`Qix${outputs[i]}`);
		}
	});

	test('is divisble by 3', () => {
		const inputs = [15, 27, 30, 21, 246, 273];
		const outputs = ['FooBarBar', 'FooQix', 'FooBarFoo*', 'FooQix', 'Foo', 'FooQixQixFoo'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});

	test('is divisble by 5', () => {
		const inputs = [15, 40, 65, 70, 85, 525];
		const outputs = ['FooBarBar', 'Bar*', 'BarBar', 'BarQixQix*', 'BarBar', 'FooBarQixBarBar'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});

	test('is divisble by 7', () => {
		const inputs = [14, 42, 84, 70, 371];
		const outputs = ['Qix', 'FooQix', 'FooQix', 'BarQixQix*', 'QixFooQix'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});

	test('is not divisible by 3, 5 or 7', () => {
		const inputs = [1, 2, 4, 8];
		const outputs = ['1', '2', '4', '8'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});

	test('"0" must be replaced by "*"', () => {
		expect(fn(101)).toBe('1*1');
		expect(fn(303)).toBe('FooFoo*Foo');
		expect(fn(105)).toBe('FooBarQix*Bar');
		expect(fn(10101)).toBe('FooQix**');
	});
});
