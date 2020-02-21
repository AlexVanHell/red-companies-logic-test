import { fn } from './fn';

describe('fn function', () => {
	test('replace number with "Foo" if it is divisible by 3', () => {
		const inputs = [3, 6 ,9];

		for (const input of inputs) {
			expect(fn(input)).toBe('Foo');
		}
	});

	test('replace number with "Bar" if it is divisible by 5', () => {
		const inputs = [5, 10];

		for (const input of inputs) {
			expect(fn(input)).toBe('Bar');
		}
	});

	test('replace number with "Qix" if it is divisible by 7', () => {
		const inputs = [7];

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
		const inputs = [5, 55, 555, 5555];
		const outputs = ['Bar', 'BarBar', 'BarBarBar', 'BarBarBarBar'];

		for (let i = 0; i < inputs.length; i++) {
			// As every element in inputs array is divisible by 5 it must add also another "Bar" at begining in each case
			expect(fn(inputs[i])).toBe(`Bar${outputs[i]}`);
		}
	});

	test('for each digit "7" replace with "Qix"', () => {
		const inputs = [7, 77, 777, 7777];
		const outputs = ['Qix', 'QixQix', 'QixQixQix', 'QixQixQixQix'];

		for (let i = 0; i < inputs.length; i++) {
			// As every element in inputs array is divisible by 7 it must add also another "Qix" at begining in each case
			expect(fn(inputs[i])).toBe(`Qix${outputs[i]}`);
		}
	});

	test('test numbers divisble by 3', () => {
		const inputs = [15, 27, 30, 21, 246, 273];
		const outputs = ['FooBarBar', 'Foo', 'FooBarFoo', 'FooQix', 'Foo', 'FooQixQixFoo'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});

	test('test numbers divisble by 5', () => {
		const inputs = [15, 40, 65, 70, 85, 525];
		const outputs = ['FooBarBar', 'BarQix', 'BarBar', 'BarQix', 'BarQixBarBar'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});

	test('test numbers divisble by 7', () => {
		const inputs = [14, 42, 84, 70, 371];
		const outputs = ['Qix', 'FooQix', 'FooQix', 'BarQixQix', 'QixQix'];

		for (let i = 0; i < inputs.length; i++) {
			expect(fn(inputs[i])).toBe(outputs[i]);
		}
	});
});
