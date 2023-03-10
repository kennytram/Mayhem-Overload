class Microgame {
    
    constructor(stage, player, obstacles, bgm, objective, controlSetting, dialogue) {
        this.stage = stage;
        this.player = player;
        this.obstacles = obstacles || [];
        this.bgm = bgm;
        this.objective = objective;
        if(this.objective==='ddr') this.bgm.volume = 0.4;
        this.won = false;
        this.isGameOver = false;
        this.controlSetting = controlSetting;
        this.barAmount = 0;
        this.dialogue = dialogue;

        this.count = 0; //bandaid fix;
        this.ddrAnswers = [];


        this.timeOutFunc = null;
    }

    reset(ctx) {
        this.won = false;
        this.isGameOver = false;
        this.barAmount = 0;
        this.count = 0;
        this.ddrAnswers = [];
        if(this.timeOutFunc) clearTimeout(this.timeOutFunc);
        this.timeOutFunc = null;
        
        this.player.reset(ctx);
        for(const obstacle of this.obstacles) obstacle.reset(ctx, this.player);
    }

    stageAnimate(stageCtx) {
        if(this.won === false) {
            this.stage.animate(stageCtx);
        }
    }

    fillBar(){
        this.barAmount += this.player.mash();
    }
    
    changeSprite(objective) {
        if(objective === "blowBar") {
            if(this.barAmount >= 100 ) {
                this.player.sprite = progressImg['blowBar'][5];
                this.won = true;
            }
            else if(this.barAmount >= 80) {
                this.player.sprite = progressImg['blowBar'][4];
            }
            else if(this.barAmount >= 60) {
                this.player.sprite = progressImg['blowBar'][3];
            }
            else if(this.barAmount >= 40) {
                this.player.sprite = progressImg['blowBar'][2];
            }
            else if(this.barAmount >= 20) {
                this.player.sprite = progressImg['blowBar'][1];
            }
            else {
                this.player.sprite = progressImg['blowBar'][0];
                
            }
        }
        else if(objective === 'survive') {
            for(const obstacle of this.obstacles) {
                const idx = progressImg['star'].indexOf(obstacle.sprite)
                obstacle.sprite = progressImg['star'][(idx+1)%progressImg['star'].length];
            }
            if(this.count === 0) {
                const that = this;
                that.timeOutFunc = setTimeout(function()   {
                    if(that.player.isAlive) {
                        that.won = true;
                    }
                }, 5000);
            }
            this.count += 1;
        }
        else if(objective === 'ddr') {
            const that = this;
            const dirs = ['up','down','left','right'];
            if(this.ddrAnswers.length === 0) that.obstacles[0].sprite = null;
            while(this.ddrAnswers.length < 4) {
                this.ddrAnswers.push(dirs[Math.floor(Math.random() * dirs.length)]);
                setTimeout(function() {
                    that.obstacles[0].sprite = ddrArrows[that.ddrAnswers[that.count]][that.count];
                    that.count++;
                }, 400 * this.ddrAnswers.length);
            }
            if(this.ddrAnswers.length === 4) {
                if(this.player.userInputs.length < 4) {
                    switch(this.player.userInputs.at(-1)) {
                        case "up":
                            this.player.sprite = progressImg['ddr'][0];
                            break;
                        case 'down':
                            this.player.sprite = progressImg['ddr'][1];
                            break;
                        case 'left':
                            this.player.sprite = progressImg['ddr'][2];
                            break;
                        case 'right':
                            this.player.sprite = progressImg['ddr'][3];
                            break;
                        default:
                            this.player.sprite = progressImg['ddr'][6];
                    }
                }
                else {
                    if(JSON.stringify(this.player.userInputs) === JSON.stringify(this.ddrAnswers)) {
                        this.player.sprite = progressImg['ddr'][4];
                        this.won = true;
                    }
                    else {
                        this.player.sprite = progressImg['ddr'][5];
                        this.isGameOver = true;
                    }
                }
            }
            
        }
    }

    spriteAnimate(spriteCtx) {
        if(this.won === false && !this.isGameOver) {
            if(!this.player.isAlive) {
                this.isGameOver = true;
            }
            
            this.changeSprite(this.objective);
 
            for(const obstacle of this.obstacles) {

                obstacle.animate(spriteCtx, this.ddrAnswers);
                


                if(obstacle.unitTypeArr.includes('enemy') && obstacle.collidesWith(this.player)) {
                    this.player.isAlive = false;
                    this.player.sprite = 'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_death.png';
                }
            }
            this.player.animate(spriteCtx);
        }
    }

}


var progressImg = {
    blowBar: [
        'https://kennytram.github.io/Mayhem-Overload/assets/blow/blow1.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/blow/blow2.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/blow/blow3.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/blow/blow4.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/blow/blow5.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/blow/blow6.png'
    ],
    spaceBalloon: [
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_default.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_down.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_up.png'
    ],
    star: [
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star1.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star2.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star3.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star4.png'
    ],
    ddr: [
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/up.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/down.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/left.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/right.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/victory.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/defeat.png',
        'https://kennytram.github.io/Mayhem-Overload/assets/ddr/neutral.png'
    ]
}
var ddrArrows = {
    up: ['https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow1.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow2.png'
    , 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow3.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow4.png'],
    down: ['https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow1.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow2.png'
    , 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow3.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow4.png'],
    left: ['https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow1.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow2.png'
    , 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow3.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow4.png'],
    right: ['https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow1.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow2.png'
    , 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow3.png', 'https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow4.png']
}


let CONSTANTS = {
    GRAVITY:  1,
    FLAP_SPEED:  5,
    TERMINAL_VEL:  5,
    BAR_SPEED: 5
}

export default Microgame;