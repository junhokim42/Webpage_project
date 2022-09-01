function checkNumber(val){
    if(typeof val !== 'number') throw 'Not Accepted type';
    console.log('It is integer value');
}

// checkNumber(100);
// checkNumber('Wrong type');
// console.log('End')

try{
    checkNumber(100);
    checkNumber('Wrong type');
} catch(e){
    console.log(`Please check error >>> ${e}`);
} finally{
    console.log('Complete');
}
