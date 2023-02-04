// TO-DO LIST:
// MAKE A BUTTON THAT WORKS BY MOUSE-CURSOR OR KEYBOARD
// Title
// FUTURE STUFF: GITHUB ICON LINK
import Screen from "./Screen"

class TitleScreen extends Screen {

    constructor() {
        super();
        this.title = "Mayhem Overload";
    }

    createButton() {
        const button = new Path2D();
        let width = this.ctx.canvas.width;
        let height = this.ctx.canvas.height;
        let buttonWidth = Math.floor(width/2);
        let buttonHeight = Math.floor(height/2);

        button.roundRect()
    }

    animate() {

    }

}

export default TitleScreen;