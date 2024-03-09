class GridLayout {
    constructor(grid) {
        this.grid = grid;        
    }
    
    outputElement(letter) {
        return `<span class="letter" data-letter="${letter}">${letter}</span>`
    }
    
    outputRow(row) {
        return `<div>${row.map(letter => this.outputElement(letter)).join('')}</div>`;
    }
    
    createGrid() {
        return `${this.grid.map(row => this.outputRow(row)).join('')}`
    }
    
    output() {
        return this.createGrid();
    }
}

export default GridLayout;