const map = new Map();

map.set('one', 1);
map.set(2, 'two');
map.set([1, 2, 3], 'Three elements');
map.set({a: 'A', b: 'B'}, 'Object element');
map.set(function() {}, 'function element');

console.log(map)
console.log(map.size);