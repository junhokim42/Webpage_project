const arr = [
    {id: 0, name: 'Hyerim', age: 6},
    {id: 1, name: 'Hyunil', age: 3},
    {id: 2, name: 'Hyuna', age: 5},
    {id: 0, name: 'Woorim', age: 2}
];

arr.forEach((el) => {
    console.log(el.name);
});

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'Jun'}
]

numArr1.sort(function(a,b) {return a-b;});
numArr2.sort(function(a,b) {return b-a;});
objArr.sort(function(a,b){
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순: ${numArr1}`);
console.log(`내림차순: ${numArr2}`);
console.log(objArr);