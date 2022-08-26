const logCompliment=function(){
    console.log("good job");
}
logCompliment();

// const lordify = function(firstname){
//     return `${firstname} in Seoul`
// }

const lordify =(firstname, land) => `${firstname} in ${land}`
console.log(lordify("Kim","Seoul"))