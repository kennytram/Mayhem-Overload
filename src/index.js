import MicrogameBoard from "./microgame_board";

const canvas = document.querySelector("#canvas");
const gameContainer = document.querySelector("#game-container");
const timer = document.querySelector("#timer_div");
const score = document.querySelector("#score");
const lives = document.querySelector("#lives");
canvas.width = gameContainer.offsetWidth;
canvas.height = gameContainer.offsetHeight;

let isMuted = false;
var menuAudio = new Audio('assets/title/main_menu.mp3');
// menuAudio.play();
menuAudio.volume = 0.3;

key('m', () => {
    if (menuAudio) {
        isMuted = !isMuted;
        menuAudio.pause();
        if (!isMuted) menuAudio.play();
    }
});
key('q', () => {
    window.location.reload();
});
key('space', () => {
    startBtn.disabled = true;
    timer.style.visibility = "visible";
    lives.style.display = "flex";
    score.style.display = "flex";
    func();
    key.unbind('space');
});

const startBtn = document.querySelector("#startButton");
const func = function () {
    timer.style.visibility = "visible";
    lives.style.display = "flex";
    score.style.display = "flex";
    menuAudio.pause();
    menuAudio = null;
    clearInterval(dialogueTimeout);
    const gameContainer = document.querySelector("#game-container");
    canvas.width = gameContainer.offsetWidth;
    canvas.height = gameContainer.offsetHeight;
    document.querySelector("#canvas").style.zIndex = 20;
    const gameBoard = new MicrogameBoard();
    gameBoard.play();
}
startBtn.addEventListener("click", func);

const dialogues = [
    'Let me be your CSS to your HTML',
    "Fork my heart because I'm ready to commit",
    "I must be an exception because you have sure caught me",
    "If I pull and push it in, know that I am already committing",
    "If you were a function, I'd call you everyday",
    "We can merge, without conflicts",
    "You are my number 0",
    "I can't wait to inject my SQL into your application layer",
    "Are you an API, because I'd like to REST with you",
    "Are you garbage because I want to collect you",
    "Those who use git aren't afraid to commit",
    "Are you a ES6, you've got some standards",
    "You had me at Hello World",
    "I'm overflowing with love for you",
    "You wanna check out my private fields",
    "Sudo make love to me",
    "You don't have bugs, only features",
    "I will debug all your code forever",
    "Can I request a pull",
    "I can resolve my promise to love you forever"
];
let count = 1;
let dialogueTimeout = setInterval(() => {
    const randIdx = Math.floor(Math.random() * dialogues.length);
    document.getElementById('desc-text').innerHTML = dialogues[randIdx];
    count++;
}, count * 4000);