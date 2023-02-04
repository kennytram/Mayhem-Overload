import User from "./user";
import TitleScreen from "./titlescreen";
import LoadScreen from "./loadscreen";
import GameScreen from "./gamescreen";


class Game {

    constructor() {
        this.user = new User();
        this.titleScreen = new TitleScreen();
        this.loadScreen = new LoadScreen();
        this.gameScreen = new GameScreen();
        this.microgames = [];
        this.addDefaultMicrogames();
    }

    // add default microgames set by the developer
    addDefaultMicrogames() {
        // add microgame #1
        // add microgame #2
        // add microgame #3
        // add microgame #4
        // add microgame #5
    }

    preAnimate() {
        // check if gameScreen.microgame is won then add score to user
        this.user.updateScore();
        // set microgame and randomize it
        
        // probably more
    }

    animate(ctx) {
        // if (this.titleScreening.running === true || this.loadingScreen.running === true) this.preAnimate();

        // if (this.titleScreen.running === true) this.titleScreen.animate();
        // else if (this.gameScreen.running === true) this.gameScreen.animate();
        // else this.loadScreen.animate();
    }

    setCtx(ctx) {
        this.titleScreen.ctx = ctx;
        this.loadScreen.ctx = ctx;
        this.gameScreen.ctx = ctx;
    }

}

Game.DIM_X = window.innerWidth;
Game.DIM_Y = window.innerHeight;

export default Game;