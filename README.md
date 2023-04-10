<a href="https://kennytram.github.io/Mayhem-Overload/" target="_blank"># Mayhem Overload</a>
#### A game that is overloaded with mayhem <img src="https://media.tenor.com/Ivb2PnLZzsUAAAAM/fire-elmo.gif" width=60 height=40>
<a href="https://kennytram.github.io/Mayhem-Overload/" target="_blank">Click Here to Play!</a>
<br/>
<img src="https://raw.githubusercontent.com/kennytram/Mayhem-Overload/main/assets/README_images/Main-Menu.gif" width=500 height=400/>
## Background

Mayhem Overload is a microgame mashup where the player has around 5-10 seconds to finish the objective of each microgame before moving on to the next one (similar to WarioWare). One of the main attractive features of microgame mashup is that the player tends to be overloaded with information as the game proceeds. However, at the same time, each microgame is inituitive and has a player-friendly game design so the player does not need a detailed instruction on how to complete the objective. It will be natural for the players to know what to do. 

## Instructions
In the current version, users will be able to play the game after pressing Enter button on their keyboard or clicking the start button with their mouse. Afterwards, the game will read their moves through key inputs.

## Features
In the current version of Mayhem Overload, users will be able to:
- Interact with the game mostly through keyboard inputs
- Listen to awesome BGM and sound effects
- Play different microgames
- Have Fun!

## Current Minigames 

### Thar He Blows
<img src="https://raw.githubusercontent.com/kennytram/Mayhem-Overload/main/assets/README_images/Balloon-Blow.gif" width=500 height=400/>

### Groove On!
<img src="https://raw.githubusercontent.com/kennytram/Mayhem-Overload/main/assets/README_images/DDR.gif" width=500 height=400/>

### Balloon Flight Survival
<img src="https://raw.githubusercontent.com/kennytram/Mayhem-Overload/main/assets/README_images/Balloon-Boy.gif" width=500 height=400/>


## Highlighted Code Snipeets

### Randomize Microgame
Used JavaScript to randomize a microgame for the user to play.
```javascript
randomizeMicrogame() {
        const microgames = Object.values(MICROGAMES);
        const microgameIdx = Math.floor(Math.random() * microgames.length);
        microgames[microgameIdx].reset(this.ctx);
        
        currBGM = microgames[microgameIdx].bgm;
        if(!isMuted && currBGM) currBGM.play();
        audioArr.push(microgames[microgameIdx].bgm);
        this.dialogue.innerHTML = microgames[microgameIdx].dialogue;
        return microgames[microgameIdx]; 
    }
```
### Binding Keys
Uesd JavaScript to bind and unbind keys for each microgame.
```javascript
case "directions":
                key('w', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('up');
                });
                key('s', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('down');
                });
                key('a', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('left');
                });
                key('d', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('right');
                });
                key('up', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('up');
                });
                key('down', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('down');
                });
                key('left', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('left');
                });
                key('right', () => {
                    playActionAudio(selectAudio);
                    this.microgame.player.ddr('right');
                });
                bindKeys.push('w','s','a','d','up','down','left','right');
                break;
```



## Technologies, Libraries, APIs
- Canvas
- npm
- Webpack

## To-dos / Future Features
- Adding more microgames!
- Refactoring the code
- Add mouse support for different microgames
