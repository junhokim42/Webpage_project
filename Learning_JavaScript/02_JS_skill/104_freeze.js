let obj = {};

obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);

const changeUntilNum = (obj, num) => {
    'use strict';

    while(true){
        console.log(obj);

        if(obj.age >=num){
            obj = Object.freeze(obj);
        }
        obj.age += 1;
    }
}

let profile = {name: 'Jiyeon', age: 25};
changeUntilNum(profile, 30);