import MicrogameBoard from "./microgame_board";

const canvas = document.querySelector("#canvas");
const gameContainer = document.querySelector("#game_container");
canvas.width = gameContainer.offsetWidth;
canvas.height = gameContainer.offsetHeight;

let isMuted = false;
var menuAudio = new Audio('assets/title/main_menu.mp3');
menuAudio.play();
menuAudio.volume = 0.3;
    
key('m', () => {
    if(menuAudio) {
        isMuted = !isMuted;
        menuAudio.pause();
        if(!isMuted) menuAudio.play();
    }
});
key('q', () => {
    window.location.reload();
});

const startBtn = document.querySelector("#startButton");
const func = function () {
    startBtn.disabled = true;
    menuAudio.pause();
    menuAudio = null;
    clearInterval(dialogueTimeout);
    const gameContainer = document.querySelector("#game_container");
    canvas.width = gameContainer.offsetWidth;
    canvas.height = gameContainer.offsetHeight;
    document.querySelector("#canvas").style.zIndex = 2;
    const gameBoard = new MicrogameBoard(); 
    gameBoard.play();
}
startBtn.addEventListener("click", func);

const dialogues = [
    'Let me be your CSS to your HTML',
    "Fork my heart because Im ready to commit",
    "I must be an exception because you have sure caught me",
    "If I pull and push it in, know that I am already committing",
    "If you were a function, Id call you everyday",
    "We can merge, without conflicts",
    "You are my number 0",
    "I cant wait to inject my SQL into your application layer",
    "Are you an API, because Id like to REST with you",
    "Are you garbage because I want to collect you",
    "Those who use git arent afraid to commit",
    "Are you a ES6, youve got some standards",
    "You had me at Hello World",
    "Im overflowing with love for you",
    "You wanna check out my private fields",
    "Sudo make love to me",
    "You dont have bugs, only features",
    "I will debug all your code forever",
    "Can I request a pull",
    "I can resolve my promise to love you forever",
    "... Hello World ..."
];
let count = 1;
let dialogueTimeout = setInterval(() => {
    const randIdx = Math.floor(Math.random() * dialogues.length);
    document.getElementById('dialogue').innerHTML = dialogues[randIdx];
    count++;
}, count * 4000);