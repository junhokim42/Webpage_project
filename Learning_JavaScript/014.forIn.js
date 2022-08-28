var store = {snack:1000, flower: 5000, beverage: 2000, ice:''};

for (var item in store){
    if(!store.hasOwnProperty(item)) continue;

    console.log(item + ' price is ' + store[item]);
}