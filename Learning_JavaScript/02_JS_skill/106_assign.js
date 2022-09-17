const obj1 = {one: 1, two: 2, three: 3};
const obj2 = {name: 'Tani', age: 5, address: 'Seoul'};
const obj3 = {friends: ['Hyerim', 'Hyuna', 'Hyeonil', 'Woorim']};

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);