import "./style.css";
import WordSearch from "@blex41/word-search"; // npm pkg
import GridLayout from "./src/GridLayout.js"; // output letter grid
import Words from "./src/Words.js"; // word list
import validateForm from "./src/formValid.js";

const setupBtn = document.querySelector("#setup");
const dialog = document.querySelector("#setup-dialog");
const dialogForm = document.querySelector("#setup-dialog form");
const printerBtn = document.querySelector("#printer");
const sheetTitle = document.querySelector("#sheet-title");
const closeDialogBtn = document.querySelector("#close-dialog");
console.log(closeDialogBtn);

const updatePage = (data={name: "Word Search", words: ["sample", "word", "search"]}) => {
  // If an option is missing, it will be given a default value
  const options = {
    cols: 10,
    rows: 10,
    disabledDirections: [],
    dictionary: data.words,
    maxWords: 20,
    backwardsProbability: 0.3,
    upperCase: true,
    diacritics: true,
  };

  // Create a new puzzle
  const ws = new WordSearch(options);

  // Use its methods
  console.dir(ws);

  let grid = new GridLayout(ws.grid);
  let words = new Words(ws.words);
  
  sheetTitle.textContent = data.name;
  document.querySelector(".grid").innerHTML = grid.output();
  document.querySelector(".words").innerHTML = words.output();
};

printerBtn.addEventListener("click", () => window.print());
setupBtn.addEventListener("click", () => dialog.showModal());
closeDialogBtn.addEventListener("click", () => dialog.close());

dialogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.dir(e.target);
  let data = validateForm({
    name: e.target.name.value,
    words: e.target.words.value,
  });
  console.log(data);
  dialog.close();
  updatePage(data);
});

updatePage();
