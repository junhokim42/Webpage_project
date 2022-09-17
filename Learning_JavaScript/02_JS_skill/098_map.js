const arr = [
    {id: 1, name: 'Woorim', age:2},
    {id: 2, name: 'Hyuna', age:5},
    {id: 3, name: 'Tani', age:30},
    {id: 4, name: 'Hyunil', age:3},
    {id: 5, name: 'Hyerim', age:6}
];

const arr2 = arr.map(e1 => {
    e1.age = e1.age + 1;
    return e1;
});

const arr3 = arr.map(e1 => e1.name);

console.log(arr2);
console.log(arr3);