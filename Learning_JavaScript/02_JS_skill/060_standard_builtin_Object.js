const str = new String('JavaScript');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));

const str1 = 'JavaScript 200';
const str2 = new String('JavaScript 200');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === 'JavaScript 200');
console.log(str2 === new String('JavaScript 200'));

console.log(str1.valueOf());
console.log(str2.valueOf());