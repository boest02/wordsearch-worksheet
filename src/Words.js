class Words {
    constructor(words) {
        this.words = words;        
    }
    
    update(words){
        console.log("Update: ", words);
        this.words = words;
        return this;  
    }
            
    output() {
        return this.words.length ? `${this.words.map(word => `<div>${word.clean}</div>`).join('')}` : '';
    }
}

export default Words;