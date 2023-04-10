import MicrogameBoard from "./microgame_board";

const canvas = document.querySelector("#canvas");
const gameContainer = document.querySelector("#game-container");
const timer = document.querySelector("#timer_div");
const score = document.querySelector("#score");
const lives = document.querySelector("#lives");
const right_div = document.querySelector(".right.icons-div");
const github_icon = document.querySelector("#github-icon");
const tooltip = document.querySelector("#tooltip");
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
key('enter', () => {
    func();

    key.unbind('enter');
});

const startBtn = document.querySelector("#startButton");
const func = function () {
    timer.style.visibility = "visible";
    lives.style.display = "flex";
    score.style.display = "flex";
    right_div.style.zIndex = 22;
    github_icon.style.display = "none";

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

function hoverStart() {
    document.getElementById("startButton").src = "assets/title/start_hovered.png";
}

function clickStart() {
    document.getElementById("startButton").src = "assets/title/start_clicked.png";
}

function releaseStart() {
    document.getElementById("startButton").src = "assets/title/start.png";
}


const images = [
    "assets/title/heart.png",
    "assets/title/github-square.png",
    "assets/title/keyboard_hover.png",
    "assets/title/keyboard_mute.png",
    "assets/title/link-square.png",
    "assets/survival_timer1.png",
    "assets/survival_timer2.png",
    "assets/survival_timer3.png",
    "assets/survival_timer4.png",
    "assets/survival_timer5.png",
    "assets/survival_timer6.png",
    "assets/timer1.png",
    "assets/timer2.png",
    "assets/timer3.png",
    "assets/timer4.png",
    "assets/timer5.png",
    "assets/timer6.png",
    "assets/timer7.png",
    "assets/timer8.png",
    "assets/timer9.png",
    "assets/blow/blow.png",
    "assets/blow/blow1.png",
    "assets/blow/blow2.png",
    "assets/blow/blow3.png",
    "assets/blow/blow4.png",
    "assets/blow/blow5.png",
    "assets/blow/blow6.png",
    "assets/ddr/defeat.png",
    "assets/ddr/dfloor.png",
    "assets/ddr/down_arrow1.png",
    "assets/ddr/down_arrow2.png",
    "assets/ddr/down_arrow3.png",
    "assets/ddr/down_arrow4.png",
    "assets/ddr/down.png",
    "assets/ddr/left_arrow1.png",
    "assets/ddr/left_arrow2.png",
    "assets/ddr/left_arrow3.png",
    "assets/ddr/left_arrow4.png",
    "assets/ddr/left.png",
    "assets/ddr/neutral.png",
    "assets/ddr/right_arrow1.png",
    "assets/ddr/right_arrow2.png",
    "assets/ddr/right_arrow3.png",
    "assets/ddr/right_arrow4.png",
    "assets/ddr/right.png",
    "assets/ddr/up_arrow1.png",
    "assets/ddr/up_arrow2.png",
    "assets/ddr/up_arrow3.png",
    "assets/ddr/up_arrow4.png",
    "assets/ddr/up.png",
    "assets/ddr/victory.png",
    "assets/space_balloon/flap_default.png",
    "assets/space_balloon/flap_down.png",
    "assets/space_balloon/flap_up.png",
    "assets/space_balloon/space_balloon_background_og.png",
    "assets/space_balloon/space_balloon_death.png",
    "assets/space_balloon/space_balloon_star1.png",
    "assets/space_balloon/space_balloon_star2.png",
    "assets/space_balloon/space_balloon_star3.png",
    "assets/space_balloon/space_balloon_star4.png",
    "assets/space_balloon/space_balloon_star5.png",
]

for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];

    img.onload = function () {
        // console.log(`${img.src} has finished loading`);
    };
}

const audioFiles = [
    'assets/title/main_menu.mp3',
    'assets/victory.mp3',
    'assets/loser.mp3',
    'assets/ddr/dance_select.mp3',
    'assets/blow/blow.ogg',
    'assets/space_balloon/flap.mp3',
    'assets/space_balloon/balloon_burst.mp3',
    'assets/gameover.mp3',
    'assets/correct.mp3',
    'assets/wrong.mp3',
    'assets/space_balloon/space_balloon.mp3',
    'assets/blow/thar_he_blows.mp3',
    'assets/ddr/dance.mp3',
]

let loadedAudioCount = 0;

audioFiles.forEach((audioFile) => {
    const audio = new Audio();
    audio.src = audioFile;

    audio.addEventListener('canplaythrough', () => {
        loadedAudioCount++;

        // calculate the percentage of loaded audio files
        const percentLoaded = Math.round((loadedAudioCount / audioFiles.length) * 100);

        // update the loading bar with the new percentage
        // ...

        if (loadedAudioCount === audioFiles.length) {
            // all audio files have finished loading
            // ...
            // console.log(`all audio files have finished loading`);
        }
    });
});