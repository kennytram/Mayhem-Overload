class Sprite {

    constructor() {
        this.xPos = 0;
        this.yPos = 0;
        this.sprite = null;
        this.isAlive = false;
    }

    get xPos(){
        return this.xPos;
    }
    set xPos(xPos){
        this.xPos = xPos;
    }

    get yPos(){
        return this.yPos;
    }
    set yPos(yPos){
        this.yPos = yPos;
    }

    get sprite(){
        return this.sprite;
    }
    set sprite(sprite){
        this.sprite = sprite;
    }

    get isAlive(){
        return this.isAlive;
    }
    set isAlive(isAlive){
        this.isAlive = isAlive;
    }
}
export default Sprite;