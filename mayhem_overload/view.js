// name: view.js
// purpose: to create an View object that combines the game and canvas

class View {

    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        
    }

    animate() {
        this.game.animate(ctx);
        window.requestAnimationFrame(this.animate.bind(this));
    }

}
export default View;