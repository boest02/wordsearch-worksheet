import "./style.css";
import WordSearch from "@blex41/word-search"; // npm pkg
import GridLayout from "./src/GridLayout.js"; // output letter grid
import Words from "./src/Words.js"; // word list
import validateForm from "./src/formValid.js";
import findIntersectingWords from "./src/intersectingWords.js";

const setupBtn = document.querySelector("#setup");
const dialog = document.querySelector("#setup-dialog");
const dialogForm = document.querySelector("#setup-dialog form");
const printerBtn = document.querySelector("#printer");
const sheetTitle = document.querySelector("#sheet-title");
const closeDialogBtn = document.querySelector("#close-dialog");
const rebuildBtn = document.querySelector("#rebuild");

let data = null;
let grid = null;
let words = null;
let puzzle = null;

console.log(closeDialogBtn);

const updatePage = (data) => {
  
  data = data || { name: "Word Search", words: ["sample", "word", "search"] };
  // If an option is missing, it will be given a default value
  const options = {
    cols: 10,
    rows: 11,
    disabledDirections: [], // use if we want to make a cross word? ["N", "W", "NW", "SW", "SE", "NE"],
    dictionary: data.words,
    maxWords: 20,
    backwardsProbability: 0.3,
    upperCase: true,
    diacritics: true,
  };
  
  console.log("UpdatePage: ", {data, options});
  
  puzzle = null; // reset
  grid = null;

  // Create a new puzzle
  puzzle = new WordSearch(options);
  console.log("Puzzle: ", puzzle);

  grid = new GridLayout(puzzle.grid);
  words = words ? words.update(puzzle.words) :  new Words(puzzle.words);

  sheetTitle.textContent = data.name;
  document.querySelector(".grid").innerHTML = grid.output();
  document.querySelector(".words").innerHTML = words.output();
};

printerBtn.addEventListener("click", () => window.print());
setupBtn.addEventListener("click", () => dialog.showModal());
closeDialogBtn.addEventListener("click", () => dialog.close());
rebuildBtn.addEventListener("click", () => updatePage(data));

dialogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  data = validateForm({
    name: e.target.name.value,
    words: e.target.words.value,
  });
  
  dialog.close();
  updatePage(data);
});

updatePage();

window.findIntersectingWords = findIntersectingWords;
