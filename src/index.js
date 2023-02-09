// import Game from "../mayhem_overload/game";
// import View from "../mayhem_overload/view";
import MicrogameBoard from "../mayhem_overload/microgame_board";

const canvas = document.querySelector("#canvas");
const gameContainer = document.querySelector("#game_container");
canvas.width = gameContainer.offsetWidth;
canvas.height = gameContainer.offsetHeight;

let isMuted = false;
var menuAudio = new Audio('./src/main_menu.mp3');
menuAudio.play();
menuAudio.volume = 0.3;

key('m', () => {
    if(menuAudio) {
        isMuted = !isMuted;
        menuAudio.pause();
        if(!isMuted) menuAudio.play();
    }
});

const startBtn = document.querySelector("#startButton");
const func = function () {
    startBtn.disabled = true;
    menuAudio.pause();
    menuAudio = null;
    const gameContainer = document.querySelector("#game_container");
    canvas.width = gameContainer.offsetWidth;
    canvas.height = gameContainer.offsetHeight;
    document.querySelector("#canvas").style.zIndex = 2;
    const gameBoard = new MicrogameBoard(); 
    gameBoard.play();
}
startBtn.addEventListener("click", func);