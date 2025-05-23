import { Board } from "./Board";
import { Player } from "./Player";

type GameState = "STARTED" | "END_WINNER" | "END_DRAW";
export class Game{
    p1:Player;
    p2:Player;
    board:Board;

    turn = 0;
    state:GameState = "STARTED";

    constructor(p1:Player, p2:Player, board:Board){
        this.p1 = p1;
        this.p2 = p2;
        this.board = board;
    }
    // winning condition

    checkWinner(player:Player):boolean{
        const c = player.characater;
        const winningLine = `${c}${c}${c}`;
        // "XOX" === "XXX" || "OOO"

        for(let row of ["A", "B", "C"]){
            if(this.board.getRow(row) === winningLine){
                return true;
            }
        }

        for(let col of [0, 1, 2]){
            if(this.board.getCol(col) === winningLine){
                return true;
            }
        }

        for(let diag of [0,1]){
            if(this.board.getDiag(diag) === winningLine){
                return true;
            }
        }

        return false;
    }

    nextTurn(){
        const player = this.turn % 2 === 0 ? this.p1 : this.p2;
        return '\n' + this.board.displayBoard() + '\n' + `Turn : ${player.name} | character : ${player.characater}`;
    }

    play(box:string){
        const player = this.turn % 2 == 0 ? this.p1 : this.p2;
        const success = this.board.markBoard(box, player.characater);
        if(success){
            if(this.checkWinner(player)){
                console.log(`GameOver!! ${player.name} is the winner`);
                console.log('\n' + this.board.displayBoard());
                this.state = "END_WINNER";
            }
             
            this.turn++;
        }

        if(this.turn == 9){
            this.state = "END_DRAW";
            console.log("Draw Game");
        }
    }

    static Builder  = class GameBuilder{
        private p1!:Player;
        private p2!:Player;

        addPlayer1(name:string, characater:string = "X"):GameBuilder{
            this.p1 = new Player.Builder().setName(name).setCharacter(characater).build();
            return this;
        }

        addPlayer2(name:string, characater:string = "O"):GameBuilder{
            this.p2 = new Player.Builder().setCharacter(characater).setName(name).build();
            return this;
        }

        build():Game{
            return new Game(this.p1, this.p2, new Board());
        }
    }
}

// Break till 8:20 pm