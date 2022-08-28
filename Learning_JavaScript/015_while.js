var hometown = [
    {name: 'Namjun', place: 'Ilsan', city: 'Goyang'},
    {name: 'Jin', place: 'Gwacheon'},
    {name: 'Hosuk', place: 'Gwangju', city: 'Jeonnaa'},
    {name: 'Jimin', place: 'Busan', city: 'Gyeongsang'}
]

var isHometown = function(h, name){
    console.log(`Function is running. Find ${name} in ${h.city} city`);

    if (h.name === name){
        console.log(`${h.name} 's hometown is ${h.city} ${h.place}`);
        return true;
    }
    return false;
}

var h;
while (h=hometown.shift()){
    if(!h.name || !h.place || !h.city) continue;
    var result = isHometown(h, 'Hosuk');
    if(result) break;
}

var i=0;
var names = ['Namjun', 'Jeongguk', 'Yungi', 'Hosub'];
var cities = ['Kyeonggi', 'Busan', "Daegu", 'Gwangju'];
do{
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
}while(i<4);

console.log(hometown);