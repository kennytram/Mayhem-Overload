// import Game from "../mayhem_overload/game";
// import View from "../mayhem_overload/view";
import MicrogameBoard from "../mayhem_overload/microgame_board";

const canvas = document.querySelector("#canvas");
const gameContainer = document.querySelector("#game_container");
canvas.width = gameContainer.offsetWidth;
canvas.height = gameContainer.offsetHeight;

const startBtn = document.querySelector("#startButton");
const func = function () {
    startBtn.disabled = true;
    document.querySelector("#canvas").style.zIndex = 2;
    const gameBoard = new MicrogameBoard();
    gameBoard.play();
}
startBtn.addEventListener("click", func);




// key('q', () => {
//     for(const audio of audioArr) {
//         audio.pause();
//         audio.currentTime = 0;
//     }
//     this.restart = true;
//     bindKeys.push('q');
// });