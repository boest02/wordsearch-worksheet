class Words {
    constructor(words) {
        this.words = words;        
    }
            
    output() {
        return `${this.words.map(word => `<div>${word.clean}</div>`).join('')}`;
    }
}

export default Words;