const arr = [
    {id: 0, name: 'Hyerim', age:6},
    {id: 1, name: 'Hyunil', age:3},
    {id: 2, name: 'Hyuna', age:5},
    {id: 3, name: 'Woorim', age:2}
];

const isHyunAHere = arr.some(e1 => e1.name == 'Hyuna');
const olderThanSix = arr.some(e1 => e1.age > 6);

console.log(isHyunAHere);
console.log(olderThanSix);