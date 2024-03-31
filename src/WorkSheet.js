import GridLayout from "./GridLayout.js"; // output letter grid
import Words from "./Words.js"; // word list

const sheetTemplate = (title, words, grid, background) => `
<section class = "worksheet">
   ${background != null ? `<img class="background" src="${background}"/>` : ''}
   <h1 class="sheet-title">${title}</h1>
   <div class="wordsearch-wrapper">
      <div class="words">${words}</div>
      <div class="grid">${grid}</div>
   </div>
</section>
`;

class WorkSheet {
    constructor(title, puzzle, background=null) {
        console.log("Worksheet", title, puzzle);
        this.grid = new GridLayout(puzzle.grid);
        this.words = new Words(puzzle.words);
        
        this.title = title;
        this.backgroundImage = background;
    }
       
    toHTML() {
        console.log("To HTML", this.title, this.words, this.grid, this.backgroundImage);
        return sheetTemplate(this.title, this.words.output(), this.grid.output(), this.backgroundImage);
    }
    
}

export default WorkSheet;