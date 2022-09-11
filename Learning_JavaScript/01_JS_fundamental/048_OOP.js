// OOP1
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student){
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0, 
    gainExp: function(){
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);

// OOP2
const studentProto = {
    gainExp: function(){
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: '뽀',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);
