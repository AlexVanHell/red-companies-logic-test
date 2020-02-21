import { fn } from './fn/fn';

console.log('\n-------------- This is a demo ---------------\n');

for (let i = 0; i < 1000; i++) {
	console.log(i, ':', fn(i));
}

console.log('\n---------------------------------------------\n');