import Microgame from './microgame'
import Sprite from './sprite'
import Stage from './stage'

class MicrogameBoard {
    constructor() {
        
        // this.stageCtx = document.getElementById('stage_canvas').getContext('2d');
        // this.spriteCtx = document.getElementById('sprite_canvas').getContext('2d');
        this.ctx = document.getElementById('canvas').getContext('2d')
        this.scoreEle = document.getElementById('score');
        this.dialogue = document.getElementById('dialogue');
        this.timerBar = document.getElementById('timer_bar');
        // this.size = (Math.floor(this.stageCtx.canvas.width/100), Math.floor(this.stageCtx.canvas.height/100));
        this.currTime = 10;
        this.maxTime = 10;
        this.score = 0; //temporary variable until we decide to make a larger version of this game
        this.lives = 3;

        this.microgame = null;
        
        this.running = false;
        this.currMicrogameFinished = false;
        this.restart = false;

        this.timerTimeout = null;
    }

    //Status: COMPLETED
    play() {
        this.microgame = this.randomizeMicrogame();
        if(this.microgame) {
            
            this.microgame.reset(this.ctx);
            unbindKeys(); //in case if user refreshes
            this.bindKeyHandlers(this.microgame);

            // this.startTimer(); //start Timer
            this.running = true;

            this.animate();
        }
        else{
            console.log("NO MICROGAME WAS SELECTED");
        }
    }

    //Status: COMPLETED
    randomizeMicrogame() {
        const microgames = Object.values(MICROGAMES);
        const microgameIdx = Math.floor(Math.random() * microgames.length);
        microgames[microgameIdx].reset(this.ctx);
        
        currBGM = microgames[microgameIdx].bgm;
        if(!isMuted && currBGM) currBGM.play();
        audioArr.push(microgames[microgameIdx].bgm);
        this.dialogue.innerHTML = microgames[microgameIdx].dialogue;
        return microgames[microgameIdx]; 
    }

    //COMPLETED
    animate() {
        if(this.running === true) {
            // console.log(this.currTime);
            // this.updateTimerbar();
            if(!this.currMicrogameFinished && this.microgame.won === true || this.restart === true ||
                this.microgame.isGameOver && this.lives > 1) 
                {
                    // clearInterval(this.timerTimeout);
                    // if(this.microgame.timeOutFunc) clearTimeout(this.microgame.timeOutFunc);
                    
                    unbindKeys();
                    
                    this.microgame.won = false;
                    if(!this.restart && !this.microgame.isGameOver) {
                        this.incrementScore();
                        this.scoreEle.innerHTML = `Score: ${this.score}`;
                    }
                    
                    this.currMicrogameFinished = true;
                    
                    if(victoryAudio.paused && !isMuted && !this.restart) {
                        for(const audio of audioArr) {
                            audio.pause();
                            audio.currentTime = 0;
                        }
                        if(!this.microgame.isGameOver) {
                            victoryAudio.play();
                        }
                    }
                    if(this.microgame.isGameOver) {
                        this.dialogue.innerHTML = "You Died";
                        const heart = document.getElementById(`heart${this.lives}`).style.display = "none";
                        this.lives--;
                        if(!isMuted) {
                            gameoverAudio.play();
                        }
                    }
                    this.restart = false;
                    this.microgame.isGameOver = false;
                    //pop out BGM
                    audioArr.pop();

                    const that = this;
                    // cancelAnimationFrame(request);
                    // console.log(this.score);
                    setTimeout(function() {
                        that.microgame = that.randomizeMicrogame();
                        that.bindKeyHandlers(that.microgame);
                        // that.microgame.stageAnimate(that.ctx);
                        that.resetTimer();
                        that.startTimer();
                        that.currMicrogameFinished = false;
                        // that.microgame.spriteAnimate(that.ctx);
                        
                    }, 2500);
            }
            else if(this.lives <= 1 && this.microgame.isGameOver) {
                unbindKeys();
                currBGM = null;
                clearInterval(this.timerTimeout);
                this.dialogue.innerHTML = 'Game Over';
                const that = this;
                setTimeout(function() {
                    that.dialogue.innerHTML = 'Press Q to Restart';
                }, 3000)
                for(const audio of audioArr) {
                    audio.pause();
                    audio.currentTime = 0;
                }
                if(this.microgame.controlSetting === 'flap') {
                    
                    if(!isMuted) spaceDeathAudio.play();
                }
                const heart = document.getElementById(`heart${this.lives}`).style.display = "none";
                this.lives--;
                if(!isMuted) {
                    loserAudio.play();
                }
                this.running = false;
            }
            else if(this.currTime > 0 && !this.currMicrogameFinished) {
                this.microgame.stageAnimate(this.ctx);
                this.microgame.spriteAnimate(this.ctx);
            }
            window.requestAnimationFrame(this.animate.bind(this));
            // request;
        }
        
    }

    //incomplete for now to readjust for timer
    incrementScore() {
        this.score++;
    }

    startTimer() {
        this.reduceTime();
    }

    stopTimer() {
        clearTimeout(this.timerTimeout);
    }

    setMicrogame(microgame) {
        this.microgame = microgame;
    }

    reduceMaxTimer() {
        this.maxTime--;
    }

    reduceTime() {
        const that = this;
        that.timerTimeout = setInterval(()=> {
            that.currTime--;
        }, 1000);
    }

    resetTimer() {
        this.currTime = 10;
    }

    updateTimerbar() {
        const calculate = Math.floor((this.maxTime - this.currTime) / 8);
        for(let i = 0; i < 9; i++) {
            console.log('test');
            if(this.currTime < calculate*i) {
                this.timerBar.src = TIMERBAR.at(-1*i);
                console.log(this.timerBar.src);
                break;
            }
        }
    }

    //COMPLETED except restart
    bindKeyHandlers(microgame) {
        
        switch(microgame.controlSetting) {
            case "test":
                key('w', () => this.microgame.player.move([0, -this.ctx.canvas.height/50], this.ctx));
                key('s', () => this.microgame.player.move([0, this.ctx.canvas.height/50], this.ctx));
                key('a', () => this.microgame.player.move([-this.ctx.canvas.width/50, 0], this.ctx));
                key('d', () => this.microgame.player.move([this.ctx.canvas.width/50, 0], this.ctx));
                key('up', () => this.microgame.player.move([0, -this.ctx.canvas.height/50], this.ctx));
                key('down', () => this.microgame.player.move([0, this.ctx.canvas.height/50], this.ctx));
                key('left', () => this.microgame.player.move([-this.ctx.canvas.width/50, 0], this.ctx));
                key('right', () => this.microgame.player.move([this.ctx.canvas.width/50, 0], this.ctx));
                key('space', () => this.microgame.player.jump());
                bindKeys.push('w','s','a','d','up','down','left','right','space');
                break;
            case "spaceButtonMash": 
                key('space', () => {
                    this.microgame.fillBar();
                    if(blowAudio.paused && !isMuted) blowAudio.play();
                });
                bindKeys.push('space');
                break;
            case "flap":
                if(this.microgame) this.microgame.player.isMidAir = true;
                key('a', () => this.microgame.player.move([-this.ctx.canvas.width/60, 0], this.ctx));
                key('d', () => this.microgame.player.move([this.ctx.canvas.width/60, 0], this.ctx));
                key('left', () => this.microgame.player.move([-this.ctx.canvas.width/60, 0], this.ctx));
                key('right', () => this.microgame.player.move([this.ctx.canvas.width/60, 0], this.ctx));
                key('space', () => {
                    this.microgame.player.flap();
                    if(!isMuted) {
                        spaceBalloonAudio.currentTime = 0;
                        spaceBalloonAudio.play();
                    }
                });
                bindKeys.push('a','d','left','right','up','down','space');
                break;
            case "directions":
                key('w', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('up');
                });
                key('s', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('down');
                });
                key('a', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('left');
                });
                key('d', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('right');
                });
                key('up', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('up');
                });
                key('down', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('down');
                });
                key('left', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('left');
                });
                key('right', () => {
                    if(!isMuted) {
                        selectAudio.currentTime = 0;
                        selectAudio.play();
                    }
                    this.microgame.player.ddr('right');
                });
                bindKeys.push('w','s','a','d','up','down','left','right');
                break;
            default:
                console.log("keybind error");
        }
    }
}

const STAGES = {
    test: new Stage('../src/windrise-background.png', false),
    blow: new Stage('../src/blow.png', false),
    spaceBalloon: new Stage('../src/space_balloon_background_og.png', true),
    ddr: new Stage('../src/dfloor.png', false)
};

const PLAYERS = {
    test: new Sprite(null, 'random', ['player']),
    blow: new Sprite('../src/blow_images/blow1.png', 'wallRight', ['player']),
    spaceBalloon: new Sprite('../src/space_balloon_images/flap_default.png','rightSide',['player']),
    ddr: new Sprite('../src/ddr/neutral.png', 'bottomSide', ['player'] )
};

const OBSTACLES = {
    test : [],
    blow : [],
    spaceBalloon : [
        new Sprite('../src/space_balloon_enemies/space_balloon_star1.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star2.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star3.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star4.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star1.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star2.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star3.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star4.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star1.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star2.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star3.png', 'random', ['enemy', 'movingRight']),
        new Sprite('../src/space_balloon_enemies/space_balloon_star4.png', 'random', ['enemy', 'movingRight']),
    ],
    ddr: [
        new Sprite('../src/ddr_dirs/up_arrow1.png', 'topLeft', ['friendly']),
    ]
};

const KEYS = {
    test : "test",
    blow : "spaceButtonMash",
    spaceBalloon : "flap",
    ddr: "directions"
};

const MICROGAMES = {
    // test: new Microgame(STAGES["test"]
    // , PLAYERS['test']
    // , OBSTACLES['test'], null, null, KEYS["test"]),
    blow: new Microgame(STAGES['blow']
    , PLAYERS['blow']
    , OBSTACLES['blow'], new Audio("../src/bgm/thar_he_blows.mp3")
    , "blowBar", KEYS["blow"], "Use Spacebar to Blow"),
    spaceBalloon: new Microgame(STAGES['spaceBalloon']
    , PLAYERS['spaceBalloon']
    , OBSTACLES['spaceBalloon'], new Audio("../src/bgm/space_balloon.mp3")
    , "survive", KEYS["spaceBalloon"], "Spacebar to Flap"),
    ddr: new Microgame(STAGES['ddr']
    , PLAYERS['ddr']
    , OBSTACLES['ddr'], new Audio("../src/bgm/dance.mp3")
    , "ddr", KEYS['ddr'], "Follow the Arrows")

};

// const timerbar1 = new Image();
// const timerbar2 = new Image();
// const timerbar3 = new Image();
// const timerbar4 = new Image();
// const timerbar5 = new Image();
// const timerbar6 = new Image();
// const timerbar7 = new Image();
// const timerbar8 = new Image();
// const timerbar9 = new Image();

// let TIMERBAR = [timerbar1,timerbar2,timerbar3,timerbar4,
//     timerbar5,timerbar6,timerbar7,timerbar8,timerbar9];
let TIMERBAR = [];
for(let i = 1; i < 10; i++) {
    // TIMERBAR[i-1].src = `src/timer${i}.png`;
    TIMERBAR.push(`src/timer${i}.png`);
}


var victoryAudio = new Audio('../src/victory.mp3');
var blowAudio  = new Audio('../src/blow.ogg');
var spaceBalloonAudio = new Audio('../src/flap.mp3')
var spaceDeathAudio = new Audio('../src/balloon_burst.mp3');
var gameoverAudio = new Audio('../src/gameover.mp3')
var correctAudio = new Audio('../src/correct.mp3');
var wrongAudio = new Audio('../src/wrong.mp3');
var selectAudio = new Audio('../src/dance_select.mp3');
var loserAudio = new Audio('../src/loser.mp3');

const audioArr = [victoryAudio, blowAudio, spaceBalloonAudio, spaceDeathAudio
    , gameoverAudio, correctAudio, wrongAudio, selectAudio, loserAudio];

var currBGM = null;
var isMuted = false;

var bindKeys = ['m','q'];

key('m', () => {
    isMuted = !isMuted;
    for(const audio of audioArr) audio.pause();
    if(!isMuted && currBGM === audioArr.at(-1)) {
        audioArr.at(-1).play();
    }
});

function unbindKeys(){
    while(bindKeys.length > 2) {
        key.unbind(bindKeys.pop());
    }
}

export default MicrogameBoard;