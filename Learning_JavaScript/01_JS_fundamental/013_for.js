var hometown = [
    {name: 'Namjun', place: 'Ilsan', city: 'Goyang'},
    {name: 'Jin', place: 'Gwacheon'},
    {name: 'Hosuk', place: 'Gwangju', city: 'Jeonnaa'},
    {name: 'Jimin', place: 'Busan', city: 'Gyeongsang'}
]

for (var i = 0; i < hometown.length; i++){
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log(i+'th trying');

    if(h.name === 'Hosuk'){
        console.log(h.name +"'s hometown is " + h.city + ' ' + h.place);
        break;
    }
}