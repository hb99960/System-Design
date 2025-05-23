import * as rl from 'readline-sync';
import { Game } from './Game';

const gameBuilder = new Game.Builder();

const playerName1 = rl.question("Enter Player 1 name : ");
const playerChar1 = rl.question("Enter Player 1 characater : ");
const playerName2 = rl.question("Enter Player 2 Nname : ");
const playerChar2 = rl.question("Enter Player 2 characater : ");

gameBuilder.addPlayer1(playerName1, playerChar1);
gameBuilder.addPlayer2(playerName2, playerChar2);

const game = gameBuilder.build();

while(game.state === "STARTED"){
    console.log(game.nextTurn());
    const box = rl.question("Enter Box : ");
    game.play(box);
}
