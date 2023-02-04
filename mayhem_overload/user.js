class User {

    constructor() {
        this.username = "";
        this.password = "";
        this.currentScore = 0;
        this.highScore = 0;
        this.customGames = [];
    }

    updateScore(){
        this.currentScore++;
        this.updateHighScore();
    }

    updateHighScore() {
        if(this.highScore < this.currentScore) this.highScore = this.currentScore;
    }
}

export default User;