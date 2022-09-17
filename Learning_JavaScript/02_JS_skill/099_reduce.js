const numArr = [1, 2, 3, 4, 5];

const result1 = numArr.reduce((acc, el) => {
    return acc + el
}, 0);

console.log(result1);

const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JavaScript'];

const result2 = arr.reduce((acc, el) => {
    return acc.concat(el);
}, []);

console.log(result2);