class BaseballGame{
    constructor(id){
        this.id = id;
        this.resultContainerEl = document.querySelector('.result-container')
        this.guessEl = document.getElementById('guess');
    }

    async init(){
        try{
            const guessLabel = document.getElementById('guess-label');
            const res = await fetch(`api/game/${this.id}`);
            const v = await res.json();
            this.digit = v.digit;
            this.history = v.history;
            this.done = v.done;
            this.history.forEach(({guess, result}) => this.rednerResults(guess, result));
            if (this.done) {this.makeEnd();}
            guessLabel.innerHTML += ` (${this.digit}자리)`;
            this.bindEvent();
            return this;
        } catch (err){
            alert(err);
        }
    }

    bindEvent(){
        this.guessEl.addEventListener('keypress', async e => {
            const guess = e.target.value;
            if (e.keyCode === 13){
                const res = await this.askResult(guess)
                this.rednerResults(guess, res.result);
                if (res.done){
                    res.done = this.done;
                    this.makeEnd();
                }
                this.guessEl.value = '';
            }
        });
    }

    
}