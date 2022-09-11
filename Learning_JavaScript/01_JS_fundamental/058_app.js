import {add, Person, version} from './058_module_export.js';

const result = add(1, 2);
const harin = new Person('하린');

console.log(result);
console.log(harin.name);
console.log(version);