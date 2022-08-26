var topic = "Javascript";

if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

if(topic){
    let topic = "React";
    console.log('Block', topic);
}

console.log('Global', topic);

const container = document.getElementById('container');
let div;

for(let i=0; i<5; i++){
    div = document.createElement('div');
    div.onclick = function(){
        alert('This is box #: ' + i +' .');
    };
    container.appendChild(div);
}