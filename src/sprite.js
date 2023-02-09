class Sprite {

    constructor(sprite, posType, unitTypeArr) {
        this.xPos = 0;
        this.yPos = 0;
        this.sprite = sprite;
        this.posType = posType;
        this.unitTypeArr = unitTypeArr;
        this.isAlive = true;
        this.spriteWidth = null;
        this.spriteHeight = null;
        this.vel = 0;
        this.isMidAir = false;
        this.userInputs = [];
    }

    initializeSpritePos(ctx, player=null) {
        if(this.posType === 'rightSide') {
            if(this.sprite === '../assets/space_balloon/space_balloon_death.png') {
                this.sprite = '../assets/space_balloon/flap_default.png'
            }
            this.xPos = Math.floor(ctx.canvas.width - ctx.canvas.width/3);
            this.yPos = Math.floor(ctx.canvas.height/4);
            
            
            CONSTANTS.FLAP_SPEED = Math.floor(ctx.canvas.height/80);
            CONSTANTS.TERMINAL_VEL = Math.floor(ctx.canvas.height/80);
            CONSTANTS.GRAVITY = Math.max(Math.floor(ctx.canvas.width/800), 0.2);
        }
        else if(this.posType === 'bottomSide') {
            this.xPos = Math.floor(ctx.canvas.width/2);
            this.yPos = ctx.canvas.height;
        }
        else if(this.posType === 'topLeft') {
            this.xPos = 0;
            this.yPos = 0;
        }
        else if(this.posType === 'random' && this.unitTypeArr.includes('enemy')) {
            if(player != null) {
                do {
                    this.xPos= ctx.canvas.width * Math.random();
                } while(Math.abs(this.xPos - player.xPos) <= ctx.canvas.width/4);
                
                do {
                    this.yPos= ctx.canvas.height * Math.random();
                } while(Math.abs(this.yPos - player.yPos) <= ctx.canvas.height/4);
            }
            else {
                this.xPos= (ctx.canvas.width * Math.random()) - ctx.canvas.width;
                this.yPos= ctx.canvas.height * Math.random();
            }
        }
    }

    reset(ctx, player=this) {
        this.isMidAir = false;
        this.isAlive = true;
        this.userInputs = [];
        this.initializeSpritePos(ctx, player);
    }

    animate(ctx, options = null, foundArr = null) {
        if(this.sprite) {
            if(this.isMidAir) this.moveAir(ctx);
            let image = new Image()
            image.src = this.sprite;
            const that = this; 
            
            image.onload = function() {
                that.spriteWidth = image.width;
                that.spriteHeight = image.height;
                
                // when we decide to have multiple canvases 
                // ctx.clearRect(that.xPos, that.yPos, that.spriteWidth, that.spriteHeight);
                // ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
                
                if(that.posType.includes('wall')){
                    that.xPos = ctx.canvas.width - that.spriteWidth
                    that.spriteHeight =  ctx.canvas.height;
                    // ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(image, that.xPos , 0, that.spriteWidth, that.spriteHeight);
                }
                else if (that.posType.includes('rightSide')) {
                    that.spriteWidth = image.width*3
                    that.spriteHeight = image.height*3;
                    if(that.isAlive) {
                        ctx.drawImage(image, that.xPos + that.spriteWidth, that.yPos,
                            that.spriteWidth, that.spriteHeight);
                    }
                    else {
                        // that.clearSpace(ctx);
                        ctx.drawImage(image, Math.floor(that.xPos + that.spriteWidth/3), that.yPos,
                            that.spriteWidth, that.spriteHeight);
                    }
                }
                else if (that.posType.includes('bottomSide')) {
                    that.spriteWidth = image.width*3
                    that.spriteHeight = image.height*3;
                    ctx.drawImage(image, Math.floor(that.xPos-that.spriteWidth/2), that.yPos-that.spriteHeight,
                        that.spriteWidth, that.spriteHeight);
                }
                else if (that.posType.includes('topLeft')) {
                    that.spriteWidth = image.width;
                    that.spriteHeight = image.height;
                    ctx.drawImage(image, that.xPos, that.yPos,
                        that.spriteWidth, that.spriteHeight);
                    ctx.drawImage(image, ctx.canvas.width - that.spriteWidth, that.yPos,
                        that.spriteWidth, that.spriteHeight);
                }
                else if (that.unitTypeArr.includes('enemy') && that.posType.includes('random')) {
                    that.spriteWidth = image.width*3
                    that.spriteHeight = image.height*3;
                    that.xPos += 5;
                    if(that.xPos >= ctx.canvas.width + that.spriteWidth) {
                        that.initializeSpritePos(ctx);
                    }
                    ctx.drawImage(image, that.xPos + that.spriteWidth, that.yPos,
                        that.spriteWidth, that.spriteHeight);
                }

                else {
                    ctx.drawImage(image, that.xPos + image.width, that.yPos + image.height, ctx.canvas.width/10, ctx.canvas.height/10);
                }
                
            };
        }
        // for testing purposes
        // else {
        //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        //     ctx.fillStyle = "black";
        //     this.spriteWidth = ctx.canvas.width/10;
        //     this.spriteHeight = ctx.canvas.height/10;
        //     ctx.fillRect(this.xPos+this.spriteWidth , this.yPos+this.spriteHeight, this.spriteWidth , this.spriteHeight);
        // }
    }

    move(dir, ctx) {
        const newXPos = Math.floor(this.xPos + dir[0] + this.spriteWidth);
        const newYPos = Math.floor(this.yPos + dir[1]);
        if(newXPos >= 0 && newXPos <= ctx.canvas.width-this.spriteWidth && newYPos >= 0 && newYPos <= ctx.canvas.height-this.spriteHeight){
            this.xPos += dir[0];
            this.yPos += dir[1];
        }
    }
    
    enemyMove(dir, ctx) {
        // const newXPos = Math.floor(this.xPos + dir[0] + this.spriteWidth);
        // const newYPos = Math.floor(this.yPos + dir[1] + this.spriteHeight);
        this.xPos += dir[0];
        this.yPos += dir[1];
    }

    //usually for enemies
    collidesWith(player) {
      const overlap = (a, b) => {
        if(a.xPos > b.xPos + b.spriteWidth || a.xPos + a.spriteWidth < b.xPos) return false;
        if(a.yPos > b.yPos + b.spriteHeight || a.yPos + a.spriteHeight < b.yPos) return false;
        return true;
      };
      let collision = false;
      if(overlap(this, player)) {
        collision = true;
      }
      return collision;
    }

    moveAir(ctx) {
        this.isMidAir = true;
        if(this.yPos < 0) {
            this.yPos = 0;
            this.vel = 0;
        }
        else {
            if(this.yPos + this.spriteHeight>= ctx.canvas.height) {
                this.yPos = ctx.canvas.height - this.spriteHeight;
                this.isAlive = false;
                this.sprite = '../assets/space_balloon/space_balloon_death.png';
            }
            else{
                this.yPos += this.vel
            }
        }
        this.vel += CONSTANTS.GRAVITY;
        if (Math.abs(this.vel) > CONSTANTS.TERMINAL_VEL) {
            if (this.vel > 0) {
              this.vel = CONSTANTS.TERMINAL_VEL;
            } 
            else {
              this.vel = CONSTANTS.TERMINAL_VEL * -1;
            }
        }
    }

    mash() {
        return CONSTANTS.BAR_SPEED;
    }

    flap(){
        this.vel = -1 * CONSTANTS.FLAP_SPEED;
        this.sprite = '../assets/space_balloon/flap_down.png';
        const that = this;
        setTimeout(function() {
            that.sprite = '../assets/space_balloon/flap_up.png';
        },100);
        setTimeout(function() {
            that.sprite = '../assets/space_balloon/flap_default.png';
        },200);
    }

    ddr(dir) {
        this.userInputs.push(dir);
    }

}

const CONSTANTS = {
    GRAVITY:  0.2,
    FLAP_SPEED:  5,
    TERMINAL_VEL:  5,
    BAR_SPEED: 5
} 


export default Sprite;