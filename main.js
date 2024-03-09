import './style.css'
import WordSearch from '@blex41/word-search'  // npm pkg
import GridLayout from './src/GridLayout.js'  // output letter grid
import Words from './src/Words.js'  // word list

// const WordSearch = require("@blex41/word-search");

// document.querySelector('#app').innerHTML = `
//   <div>    
//     <h1>WordSearch Worksheet</h1>
//     <div class="wordsearch-wrapper">
//       <div class="grid"> </div>
//       <div class="words"> </div> 
//     </div>          
//   </div>
// `;


// If an option is missing, it will be given a default value
const options = {
  cols: 10,
  rows: 10,
  disabledDirections: [],
  dictionary: ["Zeus", "Hello", "word", "search", "jeian", "money"],
  maxWords: 20,
  backwardsProbability: 0.3,
  upperCase: true,
  diacritics: true
};

// Create a new puzzle
const ws = new WordSearch(options);

// Use its methods
console.dir(ws);

let grid = new GridLayout(ws.grid);
let words = new Words(ws.words);

document.querySelector('.grid').innerHTML = grid.output();
document.querySelector('.words').innerHTML = words.output();

document.querySelector('#printer').addEventListener('click', () => window.print());
