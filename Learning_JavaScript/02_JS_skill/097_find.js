const arr = [
    {name: 'Woorim', age:2},
    {name: 'Hyuna', age:5},
    {name: 'Tani', age:30},
    {name: 'Hyunil', age:3},
    {name: 'Hyerim', age:6}
];

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);