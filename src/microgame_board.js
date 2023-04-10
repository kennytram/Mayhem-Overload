import Microgame from './microgame'
import Sprite from './sprite'
import Stage from './stage'

class MicrogameBoard {
    constructor() {
        
        // this.stageCtx = document.getElementById('stage_canvas').getContext('2d');
        // this.spriteCtx = document.getElementById('sprite_canvas').getContext('2d');
        this.ctx = document.getElementById('canvas').getContext('2d')
        this.scoreEle = document.getElementById('score');
        this.dialogue = document.getElementById('desc-text');
        this.timerBar = document.getElementById('timer_bar');
        this.dialogue = document.getElementById('tooltip');
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
            if(this.microgame.objective === 'survive'){
                this.timerBar.src = "assets/survival-timer-1.png";
            }
            this.resetTimer();
            this.startTimer(); //start Timer
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
            this.updateTimerbar();
            if(!this.currMicrogameFinished && this.microgame.won === true || this.restart === true ||
                this.microgame.isGameOver && this.lives > 1) 
                {
                    this.dialogue.style.display = "flex";
                    clearInterval(this.timerTimeout);
                    if(this.microgame.timeOutFunc) clearTimeout(this.microgame.timeOutFunc);
                    
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
                        if(this.currTime === 0) {
                            this.dialogue.innerHTML = "SO ZETTA SLOW";
                        }
                        else {
                            this.dialogue.innerHTML = "You Died";
                        }
                        
                        const heart = document.getElementById(`heart${this.lives}`);
                        heart.style.display = 'none';
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
                const heart = document.getElementById(`heart${this.lives}`);
                heart.style.display = "none";
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
            if(that.currTime === 0) {
                if(this.microgame.objective != 'survive'){
                    that.timerBar.src = TIMERBAR.at(-1); 
                    that.microgame.isGameOver = true;
                }
                else{
                    that.timerBar.src = SURVIVEBAR.at(-1); 
                }
            }
        }, 1000);
    }

    resetTimer() {
        if(this.microgame.objective === 'survive') {
            this.currTime = 5;
            this.timerBar.src = SURVIVEBAR[0];
        }
        else{
            this.currTime = this.maxTime;
        
            this.timerBar.src = TIMERBAR[0];
        }
        
    }

    updateTimerbar() {
        let calculate = Math.floor(this.maxTime / 8);
        if(this.microgame.objective === 'survive') {
            calculate = 1;
            for(let i = 0; i < 6; i++) {
                if(this.currTime < calculate*i) {
                    this.timerBar.src = SURVIVEBAR.at(-1*i);
                    break;
                }
            }
        }
        else {
            for(let i = 0; i < 9; i++) {
                if(this.currTime < calculate*i) {
                    this.timerBar.src = TIMERBAR.at(-1*i);
                    break;
                }
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
                break;
        }
    }
}

const STAGES = {
    blow: new Stage("assets/blow/blow.png", false),
    spaceBalloon: new Stage('assets/space_balloon/space_balloon_background_og.png', true),
    ddr: new Stage('assets/ddr/dfloor.png', false)
};

const PLAYERS = {
    blow: new Sprite('assets/blow/blow1.png', 'wallRight', ['player']),
    spaceBalloon: new Sprite('assets/space_balloon/flap_default.png','rightSide',['player']),
    ddr: new Sprite('assets/ddr/dfloor.png', 'bottomSide', ['player'] )
};

const OBSTACLES = {
    blow : [],
    spaceBalloon : [
        new Sprite('assets/space_balloon/space_balloon_star1.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star2.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star3.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star4.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star1.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star2.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star3.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star4.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star1.png', 'random', ['enemy', 'movingRight']),
        new Sprite('assets/space_balloon/space_balloon_star2.png', 'random', ['enemy', 'movingRight']),
    ],
    ddr: [
        new Sprite('assets/ddr/up_arrow1.png', 'topLeft', ['friendly']),
    ]
};

const KEYS = {
    blow : "spaceButtonMash",
    spaceBalloon : "flap",
    ddr: "directions"
};

const MICROGAMES = {
    blow: new Microgame(STAGES['blow']
    , PLAYERS['blow']
    , OBSTACLES['blow'], new Audio("assets/blow/thar_he_blows.mp3")
    , "blowBar", KEYS["blow"], "Use Spacebar to Blow"),
    spaceBalloon: new Microgame(STAGES['spaceBalloon']
    , PLAYERS['spaceBalloon']
    , OBSTACLES['spaceBalloon'], new Audio("assets/space_balloon/space_balloon.mp3")
    , "survive", KEYS["spaceBalloon"], "Spacebar to Flap"),
    ddr: new Microgame(STAGES['ddr']
    , PLAYERS['ddr']
    , OBSTACLES['ddr'], new Audio("assets/ddr/dance.mp3")
    , "ddr", KEYS['ddr'], "Follow the Arrows")

};

let TIMERBAR = [];
for(let i = 1; i < 10; i++) {
    TIMERBAR.push(`assets/timer${i}.png`);
}

let SURVIVEBAR = [];
for(let i = 1; i < 7; i++) {
    SURVIVEBAR.push(`assets/survival_timer${i}.png`);
}


var victoryAudio = new Audio('assets/victory.mp3');
var blowAudio  = new Audio('assets/blow/blow.ogg');
var spaceBalloonAudio = new Audio('assets/space_balloon/flap.mp3')
var spaceDeathAudio = new Audio('assets/space_balloon/balloon_burst.mp3');
var gameoverAudio = new Audio('assets/gameover.mp3')
var correctAudio = new Audio('assets/correct.mp3');
var wrongAudio = new Audio('assets/wrong.mp3');
var selectAudio = new Audio('assets/ddr/dance_select.mp3');
var loserAudio = new Audio('assets/loser.mp3');

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