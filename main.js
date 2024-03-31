import "./style.css";
import WorkSheet from "./src/WorkSheet.js"; // word search
import WordSearch from "./src/WordSearch.js"; // word list
import validateForm from "./src/formValid.js";
import getLists from "./src/getLists.js";
import tools from "./src/tools.js";

const form = document.querySelector("form");
const textArea = form.querySelector("#words");
const printerBtn = document.querySelector("#printer");
const editBtn = document.querySelector('#edit');
const rebuildBtn = document.querySelector('#rebuild');

const backgroundSearch = document.querySelector("#get-background");
const backgroundInput = document.querySelector("#background");
const backgroundImage = document.querySelector('#background-image');
const setupSection = document.querySelector('.setup-section');
const toolBar = document.querySelector('#tool-bar');

let backgroundImageUrl = null;
// image search
backgroundSearch.addEventListener("click", async (e) => {
  e.preventDefault();
  const regex = /\bhttps?:\/\/\S+?\.(?:png|jpe?g|gif|bmp|svg)\b/g;
  let text = backgroundInput.value;
  if (text.match(regex)) {
    background.src = text;
  } else {
    const command = document.querySelector('input[name="searchtype"]:checked');
    console.log(command.value);

    switch (command.value) {
      case "image":
        backgroundImageUrl = await tools.getBackground(text, 'image');
        break;
      case "ill":
        backgroundImageUrl = await tools.getBackground(text, 'illustration');
        break;
      default:
        backgroundImageUrl = await tools.getBackground(text, 'illustration');
        break;
    }

    backgroundImageUrl && (backgroundImage.src = backgroundImageUrl);
  }
});

let listSelect = document.querySelector('#list-select');
let lists = await getLists();

listSelect.addEventListener("change", (evt) => (textArea.innerHTML = lists[evt.target.value].join(', ')));

let data = null;
let puzzle = null;

const createWorksheet = (data) => {

  if (data === null) return;

  const config = {
    dictionary: data.words,
    maxWords: 20,
  };

  const mainEl = document.querySelector("main");

  // Create a new puzzle
  let wordSearch = new WordSearch(config);
  puzzle = wordSearch.puzzle;
  console.log("Puzzle: ", puzzle);

  let worksheet = new WorkSheet(data.name, puzzle, data.background);
  mainEl.innerHTML = worksheet.toHTML();
  worksheet = null; //destroy
};

const toggleScreens = (edit) => {
  if (edit) {
    setupSection.style.display = "inherit";
    toolBar.style.display = "none";
  } else {
    setupSection.style.display = "none";
    toolBar.style.display = "flex";
  }

};

backgroundImage.addEventListener("load", (e) => backgroundImage.style.display = "block");
printerBtn.addEventListener("click", () => window.print());
editBtn.addEventListener("click", () => toggleScreens(true));
rebuildBtn.addEventListener("click", () => createWorksheet(data));


form.addEventListener("submit", (e) => {
  e.preventDefault();

  data = validateForm({
    name: e.target.name.value,
    words: e.target.words.value,
    background: backgroundImageUrl,
  });

  console.dir(data);

  toggleScreens(false);

  createWorksheet(data);
});
