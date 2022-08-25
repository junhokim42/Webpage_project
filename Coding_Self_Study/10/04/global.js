function gugudan(){
    let i=1;
    for(let i =1; i<=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
};

let a=10;
const b=20;
function sum(){
    let a=50;
    const b=70;
    console.log(`Inside function: ${a}`);
    console.log(`Outside function: ${b}`);
}
gugudan();
sum();