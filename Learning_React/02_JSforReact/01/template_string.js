const lastName="Kim"
const firstName="Junggu"
const middleName="Van"
const defaultPerson ={
    name:{
        first:"Junggu",
        last:"Kim"
    },
    favActivity:"Tennis"
};

const email =`
Dear Mr.${firstName},

Thanks for purchase ticket

Information:
${lastName} ${firstName} ${middleName}
`

console.log(email);
console.log(defaultPerson.name.first);
console.log(defaultPerson.favActivity);