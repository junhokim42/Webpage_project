function Vacation(destination, length){
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function(){
    console.log(this.destination + '은(는)' + this.length + '일 걸립니다.');
};

const maui = new Vacation('마우이', 7);

maui.print();