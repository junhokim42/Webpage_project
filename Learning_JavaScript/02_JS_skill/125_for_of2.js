const products = [{name: 'bag'}, {name: 'notebook'}];

for (const item of products){
    console.log(item.name);
}

const iter = products[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());