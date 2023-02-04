import Game from "../mayhem_overload/game";
import View from "../mayhem_overload/view";


const canvas = document.querySelector("#game-canvas");
const game = new Game();
const view = new View(game);
view.run();