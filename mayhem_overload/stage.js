class Stage {

    constructor(stage, isAnimated){
        this.stage = stage;
        this.isAnimated = isAnimated;

    }

    animate(ctx) {
        if(this.stage) {
            let image = new Image()
            image.src = this.stage;
            const that = this;
            if(this.isAnimated) {
                image.onload = function() {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    shiftX -= 2;
                    if(shiftX <= 0) {
                        shiftX = 200;
                        shiftY += ctx.canvas.height;
                        if(shiftY >= image.height) {
                            shiftY = 0;
                        }
                    }
                    ctx.drawImage(image, shiftX, shiftY, 50, 200, 
                        0, 0, ctx.canvas.width, ctx.canvas.height);
                    
                };
            }
            else {
                image.onload = function() {
                    ctx.drawImage(image, 0, 0,ctx.canvas.width,ctx.canvas.height);
                };
            }
        }
        else {
            ctx.fillStyle = "skyblue";
            ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
        }
    }

}
export default Stage;
var shiftX = 200;
var shiftY = 0;