// name: view.js
// purpose: to create an View object for the game

class View {

    constructor(game) {
        this.game = game;
        // this.ctx = ctx;
        // this.game.setCtx(ctx);
    }

    run() {
        this.animate();
    }

    animate() {
        this.game.animate();
        window.requestAnimationFrame(this.animate.bind(this));
    }

}
export default View;