// var log = function(message){
//     console.log(message);
// };

const log = message => {
    console.log(message);
};


const obj = {
    message: "함수를 다른 값과 마찬가지로 객체에 추가 가능",
    log(message){
        console.log(message);
    }
}

obj.log(obj.message);

const messages = [
    '함수를 배열에 넣을 수 있습니다',
    message => console.log(message),
    '일반적인 값과 마찬가지입니다',
    message => console.log(message)
]

messages[1](messages[0])
messages[3](messages[2])

