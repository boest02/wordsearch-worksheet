// external lib https://www.npmjs.com/package/@blex41/word-search
import WordSearchLib from "@blex41/word-search"; // npm pkg

// default options
let options = {
    cols: 10,
    rows: 11,
    disabledDirections: [], // Directions to disable (any of "N", "S", "E", "W", "NE", "NW", "SE" or "SW")
    dictionary: [], // List of words to use
    maxWords: 25, // Maximum number of words allowed
    backwardsProbability: 0.3, // Probability of a word being backwards
    upperCase: true, // Whether to use uppercase letters
    forbiddenWords: ["shit", "fuck", "pussy", "penis", "cunt", ], // Words that cannot be used (ex: profane)
};

class WordSearch {
    constructor(config) {
        // if any passed in config, set it
        Object.keys(config).length && this.setConfig(config);
        
        //generate the wordsearch
        this.puzzle = new WordSearchLib(options);
    }
    
    setConfig(config) {
        const keys = Object.keys(config);
        // if options supports that key set it
        keys.forEach(key => options[key] && (options[key] = config[key]));        
    }
        
    rebuildPuzzle() {
        // clear old one
        this.puzzle = null;
        //generate the wordsearch
        this.puzzle = new WordSearchLib(options);
    }




}

export default WordSearch;