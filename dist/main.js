!function(){"use strict";!function(){var e={blowBar:["../assets/blow/blow1.png","../assets/blow/blow2.png","../assets/blow/blow3.png","../assets/blow/blow4.png","../assets/blow/blow5.png","../assets/blow/blow6.png"],spaceBalloon:["../assets/space_balloon/flap_default.png","../assets/space_balloon/flap_down.png","../assets/space_balloon/flap_up.png"],star:["../assets/space_balloon/space_balloon_star1.png","../assets/space_balloon/space_balloon_star2.png","../assets/space_balloon/space_balloon_star3.png","../assets/space_balloon/space_balloon_star4.png"],ddr:["../assets/ddr/up.png","../assets/ddr/down.png","../assets/ddr/left.png","../assets/ddr/right.png","../assets/ddr/victory.png","../assets/ddr/defeat.png","../assets/ddr/neutral.png"]},t={up:["../assets/ddr/up_arrow1.png","../assets/ddr/up_arrow2.png","../assets/ddr/up_arrow3.png","../assets/ddr/up_arrow4.png"],down:["../assets/ddr/down_arrow1.png","../assets/ddr/down_arrow2.png","../assets/ddr/down_arrow3.png","../assets/ddr/down_arrow4.png"],left:["../assets/ddr/left_arrow1.png","../assets/ddr/left_arrow2.png","../assets/ddr/left_arrow3.png","../assets/ddr/left_arrow4.png"],right:["../assets/ddr/right_arrow1.png","../assets/ddr/right_arrow2.png","../assets/ddr/right_arrow3.png","../assets/ddr/right_arrow4.png"]},s=class{constructor(e,t,s,i,a,r,o){this.stage=e,this.player=t,this.obstacles=s||[],this.bgm=i,this.objective=a,"ddr"===this.objective&&(this.bgm.volume=.4),this.won=!1,this.isGameOver=!1,this.controlSetting=r,this.barAmount=0,this.dialogue=o,this.count=0,this.ddrAnswers=[],this.timeOutFunc=null}reset(e){this.won=!1,this.isGameOver=!1,this.barAmount=0,this.count=0,this.ddrAnswers=[],this.timeOutFunc&&clearTimeout(this.timeOutFunc),this.timeOutFunc=null,this.player.reset(e);for(const t of this.obstacles)t.reset(e,this.player)}stageAnimate(e){!1===this.won&&this.stage.animate(e)}fillBar(){this.barAmount+=this.player.mash()}changeSprite(s){if("blowBar"===s)this.barAmount>=100?(this.player.sprite=e.blowBar[5],this.won=!0):this.barAmount>=80?this.player.sprite=e.blowBar[4]:this.barAmount>=60?this.player.sprite=e.blowBar[3]:this.barAmount>=40?this.player.sprite=e.blowBar[2]:this.barAmount>=20?this.player.sprite=e.blowBar[1]:this.player.sprite=e.blowBar[0];else if("survive"===s){for(const t of this.obstacles){const s=e.star.indexOf(t.sprite);t.sprite=e.star[(s+1)%e.star.length]}if(0===this.count){const e=this;e.timeOutFunc=setTimeout((function(){e.player.isAlive&&(e.won=!0)}),5e3)}this.count+=1}else if("ddr"===s){const s=this,i=["up","down","left","right"];for(0===this.ddrAnswers.length&&(s.obstacles[0].sprite=null);this.ddrAnswers.length<4;)this.ddrAnswers.push(i[Math.floor(Math.random()*i.length)]),setTimeout((function(){s.obstacles[0].sprite=t[s.ddrAnswers[s.count]][s.count],s.count++}),400*this.ddrAnswers.length);if(4===this.ddrAnswers.length)if(this.player.userInputs.length<4)switch(this.player.userInputs.at(-1)){case"up":this.player.sprite=e.ddr[0];break;case"down":this.player.sprite=e.ddr[1];break;case"left":this.player.sprite=e.ddr[2];break;case"right":this.player.sprite=e.ddr[3];break;default:this.player.sprite=e.ddr[6]}else JSON.stringify(this.player.userInputs)===JSON.stringify(this.ddrAnswers)?(this.player.sprite=e.ddr[4],this.won=!0):(this.player.sprite=e.ddr[5],this.isGameOver=!0)}}spriteAnimate(e){if(!1===this.won&&!this.isGameOver){this.player.isAlive||(this.isGameOver=!0),this.changeSprite(this.objective);for(const t of this.obstacles)t.animate(e,this.ddrAnswers),t.unitTypeArr.includes("enemy")&&t.collidesWith(this.player)&&(this.player.isAlive=!1,this.player.sprite="../assets/space_balloon/space_balloon_death.png");this.player.animate(e)}}};const i={GRAVITY:.2,FLAP_SPEED:5,TERMINAL_VEL:5,BAR_SPEED:5};var a=class{constructor(e,t,s){this.xPos=0,this.yPos=0,this.sprite=e,this.posType=t,this.unitTypeArr=s,this.isAlive=!0,this.spriteWidth=null,this.spriteHeight=null,this.vel=0,this.isMidAir=!1,this.userInputs=[]}initializeSpritePos(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("rightSide"===this.posType)"assets/space_balloon/space_balloon_death.png"===this.sprite&&(this.sprite="assets/space_balloon/flap_default.png"),this.xPos=Math.floor(e.canvas.width-e.canvas.width/3),this.yPos=Math.floor(e.canvas.height/4),i.FLAP_SPEED=Math.floor(e.canvas.height/70),i.TERMINAL_VEL=Math.floor(e.canvas.height/70),i.GRAVITY=Math.max(Math.floor(e.canvas.width/1e3),.1);else if("bottomSide"===this.posType)this.xPos=Math.floor(e.canvas.width/2),this.yPos=e.canvas.height;else if("topLeft"===this.posType)this.xPos=0,this.yPos=0;else if("random"===this.posType&&this.unitTypeArr.includes("enemy"))if(null!=t){do{this.xPos=e.canvas.width*Math.random()}while(Math.abs(this.xPos-t.xPos)<=e.canvas.width/4);do{this.yPos=e.canvas.height*Math.random()}while(Math.abs(this.yPos-t.yPos)<=e.canvas.height/4)}else this.xPos=e.canvas.width*Math.random()-e.canvas.width,this.yPos=e.canvas.height*Math.random()}reset(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this.isMidAir=!1,this.isAlive=!0,this.userInputs=[],this.initializeSpritePos(e,t)}animate(e){if(this.sprite){this.isMidAir&&this.moveAir(e);let t=new Image;t.src=this.sprite;const s=this;t.onload=function(){s.spriteWidth=t.width,s.spriteHeight=t.height,s.posType.includes("wall")?(s.xPos=e.canvas.width-s.spriteWidth,s.spriteHeight=e.canvas.height,e.drawImage(t,s.xPos,0,s.spriteWidth,s.spriteHeight)):s.posType.includes("rightSide")?(s.spriteWidth=3*t.width,s.spriteHeight=3*t.height,s.isAlive?e.drawImage(t,s.xPos+s.spriteWidth,s.yPos,s.spriteWidth,s.spriteHeight):e.drawImage(t,Math.floor(s.xPos+s.spriteWidth/3),s.yPos,s.spriteWidth,s.spriteHeight)):s.posType.includes("bottomSide")?(s.spriteWidth=3*t.width,s.spriteHeight=3*t.height,e.drawImage(t,Math.floor(s.xPos-s.spriteWidth/2),s.yPos-s.spriteHeight,s.spriteWidth,s.spriteHeight)):s.posType.includes("topLeft")?(s.spriteWidth=t.width,s.spriteHeight=t.height,e.drawImage(t,s.xPos,s.yPos,s.spriteWidth,s.spriteHeight),e.drawImage(t,e.canvas.width-s.spriteWidth,s.yPos,s.spriteWidth,s.spriteHeight)):s.unitTypeArr.includes("enemy")&&s.posType.includes("random")?(s.spriteWidth=3*t.width,s.spriteHeight=3*t.height,s.xPos+=2,s.xPos>=e.canvas.width+s.spriteWidth&&s.initializeSpritePos(e),e.drawImage(t,s.xPos+s.spriteWidth,s.yPos,s.spriteWidth,s.spriteHeight)):e.drawImage(t,s.xPos+t.width,s.yPos+t.height,e.canvas.width/10,e.canvas.height/10)}}}move(e,t){const s=Math.floor(this.xPos+e[0]+this.spriteWidth),i=Math.floor(this.yPos+e[1]);s>=0&&s<=t.canvas.width-this.spriteWidth&&i>=0&&i<=t.canvas.height-this.spriteHeight&&(this.xPos+=e[0],this.yPos+=e[1])}enemyMove(e,t){this.xPos+=e[0],this.yPos+=e[1]}collidesWith(e){let t=!1;var s,i;return i=e,(s=this).xPos>i.xPos+i.spriteWidth||s.xPos+s.spriteWidth<i.xPos||s.yPos>i.yPos+i.spriteHeight||s.yPos+s.spriteHeight<i.yPos||(t=!0),t}moveAir(e){this.isMidAir=!0,this.yPos<0?(this.yPos=0,this.vel=0):this.yPos+this.spriteHeight>=e.canvas.height?(this.yPos=e.canvas.height-this.spriteHeight,this.isAlive=!1,this.sprite="assets/space_balloon/space_balloon_death.png"):this.yPos+=this.vel,this.vel+=i.GRAVITY,Math.abs(this.vel)>i.TERMINAL_VEL&&(this.vel>0?this.vel=i.TERMINAL_VEL:this.vel=-1*i.TERMINAL_VEL)}mash(){return i.BAR_SPEED}flap(){this.vel=-1*i.FLAP_SPEED,this.sprite="assets/space_balloon/flap_down.png";const e=this;setTimeout((function(){e.sprite="assets/space_balloon/flap_up.png"}),100),setTimeout((function(){e.sprite="assets/space_balloon/flap_default.png"}),200)}ddr(e){this.userInputs.push(e)}},r=class{constructor(e,t){this.stage=e,this.isAnimated=t}animate(e){if(this.stage){let t=new Image;t.src=this.stage,this.isAnimated?t.onload=function(){e.clearRect(0,0,e.canvas.width,e.canvas.height),(o-=2)<=0&&(o=200,(n+=e.canvas.height)>=t.height&&(n=0)),e.drawImage(t,o,n,50,200,0,0,e.canvas.width,e.canvas.height)}:t.onload=function(){e.drawImage(t,0,0,e.canvas.width,e.canvas.height)}}else e.fillStyle="skyblue",e.fillRect(0,0,e.canvas.width,e.canvas.height)}},o=200,n=0;const h={test:new r("assets/windrise-background.png",!1),blow:new r("assets/blow/blow.png",!1),spaceBalloon:new r("assets//space_balloon/space_balloon_background_og.png",!0),ddr:new r("assets/ddr/dfloor.png",!1)},l={test:new a(null,"random",["player"]),blow:new a("assets/blow/blow1.png","wallRight",["player"]),spaceBalloon:new a("assets/space_balloon/flap_default.png","rightSide",["player"]),ddr:new a("assets/ddr/neutral.png","bottomSide",["player"])},c={test:[],blow:[],spaceBalloon:[new a("assets/space_balloon/space_balloon_star1.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star2.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star3.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star4.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star1.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star2.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star3.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star4.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star1.png","random",["enemy","movingRight"]),new a("assets/space_balloon/space_balloon_star2.png","random",["enemy","movingRight"])],ddr:[new a("assets/ddr/up_arrow1.png","topLeft",["friendly"])]},p={blow:new s(h.blow,l.blow,c.blow,new Audio("assets/blow/thar_he_blows.mp3"),"blowBar","spaceButtonMash","Use Spacebar to Blow"),spaceBalloon:new s(h.spaceBalloon,l.spaceBalloon,c.spaceBalloon,new Audio("assets/space_balloon/space_balloon.mp3"),"survive","flap","Spacebar to Flap"),ddr:new s(h.ddr,l.ddr,c.ddr,new Audio("assets/ddr/dance.mp3"),"ddr","directions","Follow the Arrows")};let d=[];for(let e=1;e<10;e++)d.push(`assets/timer${e}.png`);let m=[];for(let e=1;e<7;e++)m.push(`assets/survival_timer${e}.png`);var g=new Audio("assets/victory.mp3"),u=new Audio("assets/blow/blow.ogg"),y=new Audio("assets/space_balloon/flap.mp3"),w=new Audio("assets/space_balloon/balloon_burst.mp3"),v=new Audio("assets/gameover.mp3"),b=new Audio("assets/correct.mp3"),f=new Audio("assets/wrong.mp3"),_=new Audio("assets/ddr/dance_select.mp3"),T=new Audio("assets/loser.mp3");const A=[g,u,y,w,v,b,f,_,T];var P=null,x=!1,M=["m","q"];function I(){for(;M.length>2;)key.unbind(M.pop())}key("m",(()=>{x=!x;for(const e of A)e.pause();x||P!==A.at(-1)||A.at(-1).play()}));const k=document.querySelector("#canvas"),S=document.querySelector("#game_container");k.width=S.offsetWidth,k.height=S.offsetHeight;let B=!1;var E=new Audio("assets/title/main_menu.mp3");E.play(),E.volume=.3,key("m",(()=>{E&&(B=!B,E.pause(),B||E.play())})),key("q",(()=>{window.location.reload()}));const H=document.querySelector("#startButton");H.addEventListener("click",(function(){H.disabled=!0,E.pause(),E=null,clearInterval(O);const e=document.querySelector("#game_container");k.width=e.offsetWidth,k.height=e.offsetHeight,document.querySelector("#canvas").style.zIndex=2,(new class{constructor(){this.ctx=document.getElementById("canvas").getContext("2d"),this.scoreEle=document.getElementById("score"),this.dialogue=document.getElementById("dialogue"),this.timerBar=document.getElementById("timer_bar"),this.currTime=10,this.maxTime=10,this.score=0,this.lives=3,this.microgame=null,this.running=!1,this.currMicrogameFinished=!1,this.restart=!1,this.timerTimeout=null}play(){this.microgame=this.randomizeMicrogame(),this.microgame?(this.microgame.reset(this.ctx),I(),this.bindKeyHandlers(this.microgame),"survive"===this.microgame.objective&&(this.timerBar.src="assets/survival_timer1.png"),this.resetTimer(),this.startTimer(),this.running=!0,this.animate()):console.log("NO MICROGAME WAS SELECTED")}randomizeMicrogame(){const e=Object.values(p),t=Math.floor(Math.random()*e.length);return e[t].reset(this.ctx),P=e[t].bgm,!x&&P&&P.play(),A.push(e[t].bgm),this.dialogue.innerHTML=e[t].dialogue,e[t]}animate(){if(!0===this.running){if(this.updateTimerbar(),!this.currMicrogameFinished&&!0===this.microgame.won||!0===this.restart||this.microgame.isGameOver&&this.lives>1){if(clearInterval(this.timerTimeout),this.microgame.timeOutFunc&&clearTimeout(this.microgame.timeOutFunc),I(),this.microgame.won=!1,this.restart||this.microgame.isGameOver||(this.incrementScore(),this.scoreEle.innerHTML=`Score: ${this.score}`),this.currMicrogameFinished=!0,g.paused&&!x&&!this.restart){for(const e of A)e.pause(),e.currentTime=0;this.microgame.isGameOver||g.play()}this.microgame.isGameOver&&(0===this.currTime?this.dialogue.innerHTML="SO ZETTA SLOW":this.dialogue.innerHTML="You Died",document.getElementById(`heart${this.lives}`).style.display="none",this.lives--,x||v.play()),this.restart=!1,this.microgame.isGameOver=!1,A.pop();const e=this;setTimeout((function(){e.microgame=e.randomizeMicrogame(),e.bindKeyHandlers(e.microgame),e.resetTimer(),e.startTimer(),e.currMicrogameFinished=!1}),2500)}else if(this.lives<=1&&this.microgame.isGameOver){I(),P=null,clearInterval(this.timerTimeout),this.dialogue.innerHTML="Game Over";const e=this;setTimeout((function(){e.dialogue.innerHTML="Press Q to Restart"}),3e3);for(const e of A)e.pause(),e.currentTime=0;"flap"===this.microgame.controlSetting&&(x||w.play()),document.getElementById(`heart${this.lives}`).style.display="none",this.lives--,x||T.play(),this.running=!1}else this.currTime>0&&!this.currMicrogameFinished&&(this.microgame.stageAnimate(this.ctx),this.microgame.spriteAnimate(this.ctx));window.requestAnimationFrame(this.animate.bind(this))}}incrementScore(){this.score++}startTimer(){this.reduceTime()}stopTimer(){clearTimeout(this.timerTimeout)}setMicrogame(e){this.microgame=e}reduceMaxTimer(){this.maxTime--}reduceTime(){const e=this;e.timerTimeout=setInterval((()=>{e.currTime--,0===e.currTime&&("survive"!=this.microgame.objective?(e.timerBar.src=d.at(-1),e.microgame.isGameOver=!0):e.timerBar.src=m.at(-1))}),1e3)}resetTimer(){"survive"===this.microgame.objective?(console.log("true"),this.currTime=5,this.timerBar.src=m[0]):(this.currTime=this.maxTime,this.timerBar.src=d[0])}updateTimerbar(){let e=Math.floor(this.maxTime/8);if("survive"===this.microgame.objective){e=1;for(let t=0;t<6;t++)if(this.currTime<e*t){this.timerBar.src=m.at(-1*t);break}}else for(let t=0;t<9;t++)if(this.currTime<e*t){this.timerBar.src=d.at(-1*t);break}}bindKeyHandlers(e){switch(e.controlSetting){case"test":key("w",(()=>this.microgame.player.move([0,-this.ctx.canvas.height/50],this.ctx))),key("s",(()=>this.microgame.player.move([0,this.ctx.canvas.height/50],this.ctx))),key("a",(()=>this.microgame.player.move([-this.ctx.canvas.width/50,0],this.ctx))),key("d",(()=>this.microgame.player.move([this.ctx.canvas.width/50,0],this.ctx))),key("up",(()=>this.microgame.player.move([0,-this.ctx.canvas.height/50],this.ctx))),key("down",(()=>this.microgame.player.move([0,this.ctx.canvas.height/50],this.ctx))),key("left",(()=>this.microgame.player.move([-this.ctx.canvas.width/50,0],this.ctx))),key("right",(()=>this.microgame.player.move([this.ctx.canvas.width/50,0],this.ctx))),key("space",(()=>this.microgame.player.jump())),M.push("w","s","a","d","up","down","left","right","space");break;case"spaceButtonMash":key("space",(()=>{this.microgame.fillBar(),u.paused&&!x&&u.play()})),M.push("space");break;case"flap":this.microgame&&(this.microgame.player.isMidAir=!0),key("a",(()=>this.microgame.player.move([-this.ctx.canvas.width/60,0],this.ctx))),key("d",(()=>this.microgame.player.move([this.ctx.canvas.width/60,0],this.ctx))),key("left",(()=>this.microgame.player.move([-this.ctx.canvas.width/60,0],this.ctx))),key("right",(()=>this.microgame.player.move([this.ctx.canvas.width/60,0],this.ctx))),key("space",(()=>{this.microgame.player.flap(),x||(y.currentTime=0,y.play())})),M.push("a","d","left","right","up","down","space");break;case"directions":key("w",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("up")})),key("s",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("down")})),key("a",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("left")})),key("d",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("right")})),key("up",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("up")})),key("down",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("down")})),key("left",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("left")})),key("right",(()=>{x||(_.currentTime=0,_.play()),this.microgame.player.ddr("right")})),M.push("w","s","a","d","up","down","left","right");break;default:console.log("keybind error")}}}).play()}));const W=["Let me be your CSS to your HTML","Fork my heart because Im ready to commit","I must be an exception because you have sure caught me","If I pull and push it in, know that I am already committing","If you were a function, Id call you everyday","We can merge, without conflicts","You are my number 0","I cant wait to inject my SQL into your application layer","Are you an API, because Id like to REST with you","Are you garbage because I want to collect you","Those who use git arent afraid to commit","Are you a ES6, youve got some standards","You had me at Hello World","Im overflowing with love for you","You wanna check out my private fields","Sudo make love to me","You dont have bugs, only features","I will debug all your code forever","Can I request a pull","I can resolve my promise to love you forever","... Hello World ..."];let L=1,O=setInterval((()=>{const e=Math.floor(Math.random()*W.length);document.getElementById("dialogue").innerHTML=W[e],L++}),4e3*L)}()}();
//# sourceMappingURL=main.js.map