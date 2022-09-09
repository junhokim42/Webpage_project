if (true){
    var functionScopeValue = 'global';
    let blockScopeValue ='local';
}
console.log(functionScopeValue);
// console.log(blockScopeValue);

let value = 'Outer';
if (true){
    let value = 'Inner';
    console.log(value);
}