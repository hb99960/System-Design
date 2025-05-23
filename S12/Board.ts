
const ROWS = "ABC";
export class Board{
    size:number;
    grid : Array<Array<string>>;

    constructor(size:number = 3) {
        this.size = size;
        this.grid = [];

        for(let i=0; i<size; i++){
            this.grid.push(new Array(size).fill("_"));
        }
    }

    markBoard(box:string, characater:string): boolean{
        // box = "A2" "A2324" "G674" "D4" "3C"
        const stringRowElement = box[0];
        const stringColElement = box.charAt(1);
        // character = "X";

        if(box.length != 2){
            throw new Error("Invalid choice!!!");
        }

        // rows : alphabets
        // cols : number
        const row = ROWS.indexOf(stringRowElement);
        const col = Number(stringColElement) - 1;

        if( row<0 || row>= this.size || col<0 || col >= this.size){
            throw new Error("Invalid place!!!");
        }

        if(this.grid[row][col] != "_"){
            throw new Error("Wrong Position : Already Marked!!!");
        }

        this.grid[row][col] = characater;
        return true;   

    }

    displayBoard():string{
        const displayRows = [];
        for(let row of this.grid){
            displayRows.push(row.join('\t'));
        }
        return displayRows.join('\n');
    }

    // getRow
    getRow(rowName:string):string{
        const row = ROWS.indexOf(rowName);

        if(row == -1 || row>= this.size){
            throw new Error('row number is invalid');
        }
        return this.grid[row].join("");
        // XXX OOO XOX OXO
    }
    // getCol
    getCol(col:number):string{
        if(col<0 || col > this.size){
            throw new Error('Col number is invalid');
        }
        const colVals = [];
        for(let i=0; i<this.size; i++){
            colVals.push(this.grid[i][col]);
        }

        return colVals.join("");
    }
    // getDiag
    getDiag(diagNumber:number):string{
        const diagVals = [];

        if(diagNumber == 0){
            for(let i=0; i<this.size; i++){
                diagVals.push(this.grid[i][i]);
            }
            return diagVals.join("");
        } else if (diagNumber == 1){
            for(let i=0; i<this.size; i++){
                diagVals.push(this.grid[i][this.size - i - 1]);
            }
        }

        return diagVals.join("");
    }
}


// Terminologies / Representation
// X _ _   A 
// _ X _   B
// _ _ X   C

// 1 2 3

// B3, B2, B1 = X, X, X or O, O, O

// Diagonal : A1B2C3, A3B2C1

