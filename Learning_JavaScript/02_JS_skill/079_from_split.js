const str = '12345678';

const distributeArr = Array.from(str);
console.log(distributeArr);

const modifiedArr = Array.from(distributeArr, e1 => e1 * 2);
console.log(modifiedArr);

const capitals = `Prague, Czech Republic
Copenhagen, Denmark
Paris, France
Madrid, Spain
Rome, Italy`

capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in${country}`);
});