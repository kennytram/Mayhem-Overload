!function(){"use strict";!function(){var t={blowBar:["https://kennytram.github.io/Mayhem-Overload/assets/blow/blow1.png","https://kennytram.github.io/Mayhem-Overload/assets/blow/blow2.png","https://kennytram.github.io/Mayhem-Overload/assets/blow/blow3.png","https://kennytram.github.io/Mayhem-Overload/assets/blow/blow4.png","https://kennytram.github.io/Mayhem-Overload/assets/blow/blow5.png","https://kennytram.github.io/Mayhem-Overload/assets/blow/blow6.png"],spaceBalloon:["https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_default.png","https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_down.png","https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_up.png"],star:["https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star1.png","https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star2.png","https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star3.png","https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star4.png"],ddr:["https://kennytram.github.io/Mayhem-Overload/assets/ddr/up.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/down.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/left.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/right.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/victory.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/defeat.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/neutral.png"]},e={up:["https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow1.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow2.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow3.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow4.png"],down:["https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow1.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow2.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow3.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/down_arrow4.png"],left:["https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow1.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow2.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow3.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/left_arrow4.png"],right:["https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow1.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow2.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow3.png","https://kennytram.github.io/Mayhem-Overload/assets/ddr/right_arrow4.png"]},s=class{constructor(t,e,s,i,a,r,o){this.stage=t,this.player=e,this.obstacles=s||[],this.bgm=i,this.objective=a,"ddr"===this.objective&&(this.bgm.volume=.4),this.won=!1,this.isGameOver=!1,this.controlSetting=r,this.barAmount=0,this.dialogue=o,this.count=0,this.ddrAnswers=[],this.timeOutFunc=null}reset(t){this.won=!1,this.isGameOver=!1,this.barAmount=0,this.count=0,this.ddrAnswers=[],this.timeOutFunc&&clearTimeout(this.timeOutFunc),this.timeOutFunc=null,this.player.reset(t);for(const e of this.obstacles)e.reset(t,this.player)}stageAnimate(t){!1===this.won&&this.stage.animate(t)}fillBar(){this.barAmount+=this.player.mash()}changeSprite(s){if("blowBar"===s)this.barAmount>=100?(this.player.sprite=t.blowBar[5],this.won=!0):this.barAmount>=80?this.player.sprite=t.blowBar[4]:this.barAmount>=60?this.player.sprite=t.blowBar[3]:this.barAmount>=40?this.player.sprite=t.blowBar[2]:this.barAmount>=20?this.player.sprite=t.blowBar[1]:this.player.sprite=t.blowBar[0];else if("survive"===s){for(const e of this.obstacles){const s=t.star.indexOf(e.sprite);e.sprite=t.star[(s+1)%t.star.length]}if(0===this.count){const t=this;t.timeOutFunc=setTimeout((function(){t.player.isAlive&&(t.won=!0)}),5e3)}this.count+=1}else if("ddr"===s){const s=this,i=["up","down","left","right"];for(0===this.ddrAnswers.length&&(s.obstacles[0].sprite=null);this.ddrAnswers.length<4;)this.ddrAnswers.push(i[Math.floor(Math.random()*i.length)]),setTimeout((function(){s.obstacles[0].sprite=e[s.ddrAnswers[s.count]][s.count],s.count++}),400*this.ddrAnswers.length);if(4===this.ddrAnswers.length)if(this.player.userInputs.length<4)switch(this.player.userInputs.at(-1)){case"up":this.player.sprite=t.ddr[0];break;case"down":this.player.sprite=t.ddr[1];break;case"left":this.player.sprite=t.ddr[2];break;case"right":this.player.sprite=t.ddr[3];break;default:this.player.sprite=t.ddr[6]}else JSON.stringify(this.player.userInputs)===JSON.stringify(this.ddrAnswers)?(this.player.sprite=t.ddr[4],this.won=!0):(this.player.sprite=t.ddr[5],this.isGameOver=!0)}}spriteAnimate(t){if(!1===this.won&&!this.isGameOver){this.player.isAlive||(this.isGameOver=!0),this.changeSprite(this.objective);for(const e of this.obstacles)e.animate(t,this.ddrAnswers),e.unitTypeArr.includes("enemy")&&e.collidesWith(this.player)&&(this.player.isAlive=!1,this.player.sprite="https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_death.png");this.player.animate(t)}}};const i={GRAVITY:.2,FLAP_SPEED:5,TERMINAL_VEL:5,BAR_SPEED:5};var a=class{constructor(t,e,s){this.xPos=0,this.yPos=0,this.sprite=t,this.posType=e,this.unitTypeArr=s,this.isAlive=!0,this.spriteWidth=null,this.spriteHeight=null,this.vel=0,this.isMidAir=!1,this.userInputs=[]}initializeSpritePos(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("rightSide"===this.posType)"https://kennytram.github.io/Mayhem-Overload/space_balloon/space_balloon_death.png"===this.sprite&&(this.sprite="https://kennytram.github.io/Mayhem-Overload/space_balloon/flap_default.png"),this.xPos=Math.floor(t.canvas.width-t.canvas.width/3),this.yPos=Math.floor(t.canvas.height/4),i.FLAP_SPEED=Math.floor(t.canvas.height/80),i.TERMINAL_VEL=Math.floor(t.canvas.height/80),i.GRAVITY=Math.max(Math.floor(t.canvas.width/1e3),.2);else if("bottomSide"===this.posType)this.xPos=Math.floor(t.canvas.width/2),this.yPos=t.canvas.height;else if("topLeft"===this.posType)this.xPos=0,this.yPos=0;else if("random"===this.posType&&this.unitTypeArr.includes("enemy"))if(null!=e){do{this.xPos=t.canvas.width*Math.random()}while(Math.abs(this.xPos-e.xPos)<=t.canvas.width/4);do{this.yPos=t.canvas.height*Math.random()}while(Math.abs(this.yPos-e.yPos)<=t.canvas.height/4)}else this.xPos=t.canvas.width*Math.random()-t.canvas.width,this.yPos=t.canvas.height*Math.random()}reset(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this.isMidAir=!1,this.isAlive=!0,this.userInputs=[],this.initializeSpritePos(t,e)}animate(t){if(this.sprite){this.isMidAir&&this.moveAir(t);let e=new Image;e.src=this.sprite;const s=this;e.onload=function(){s.spriteWidth=e.width,s.spriteHeight=e.height,s.posType.includes("wall")?(s.xPos=t.canvas.width-s.spriteWidth,s.spriteHeight=t.canvas.height,t.drawImage(e,s.xPos,0,s.spriteWidth,s.spriteHeight)):s.posType.includes("rightSide")?(s.spriteWidth=3*e.width,s.spriteHeight=3*e.height,s.isAlive?t.drawImage(e,s.xPos+s.spriteWidth,s.yPos,s.spriteWidth,s.spriteHeight):t.drawImage(e,Math.floor(s.xPos+s.spriteWidth/3),s.yPos,s.spriteWidth,s.spriteHeight)):s.posType.includes("bottomSide")?(s.spriteWidth=3*e.width,s.spriteHeight=3*e.height,t.drawImage(e,Math.floor(s.xPos-s.spriteWidth/2),s.yPos-s.spriteHeight,s.spriteWidth,s.spriteHeight)):s.posType.includes("topLeft")?(s.spriteWidth=e.width,s.spriteHeight=e.height,t.drawImage(e,s.xPos,s.yPos,s.spriteWidth,s.spriteHeight),t.drawImage(e,t.canvas.width-s.spriteWidth,s.yPos,s.spriteWidth,s.spriteHeight)):s.unitTypeArr.includes("enemy")&&s.posType.includes("random")?(s.spriteWidth=3*e.width,s.spriteHeight=3*e.height,s.xPos+=4,s.xPos>=t.canvas.width+s.spriteWidth&&s.initializeSpritePos(t),t.drawImage(e,s.xPos+s.spriteWidth,s.yPos,s.spriteWidth,s.spriteHeight)):t.drawImage(e,s.xPos+e.width,s.yPos+e.height,t.canvas.width/10,t.canvas.height/10)}}}move(t,e){const s=Math.floor(this.xPos+t[0]+this.spriteWidth),i=Math.floor(this.yPos+t[1]);s>=0&&s<=e.canvas.width-this.spriteWidth&&i>=0&&i<=e.canvas.height-this.spriteHeight&&(this.xPos+=t[0],this.yPos+=t[1])}enemyMove(t,e){this.xPos+=t[0],this.yPos+=t[1]}collidesWith(t){let e=!1;var s,i;return i=t,(s=this).xPos>i.xPos+i.spriteWidth||s.xPos+s.spriteWidth<i.xPos||s.yPos>i.yPos+i.spriteHeight||s.yPos+s.spriteHeight<i.yPos||(e=!0),e}moveAir(t){this.isMidAir=!0,this.yPos<0?(this.yPos=0,this.vel=0):this.yPos+this.spriteHeight>=t.canvas.height?(this.yPos=t.canvas.height-this.spriteHeight,this.isAlive=!1,this.sprite="https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_death.png"):this.yPos+=this.vel,this.vel+=i.GRAVITY,Math.abs(this.vel)>i.TERMINAL_VEL&&(this.vel>0?this.vel=i.TERMINAL_VEL:this.vel=-1*i.TERMINAL_VEL)}mash(){return i.BAR_SPEED}flap(){this.vel=-1*i.FLAP_SPEED,this.sprite="https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_down.png";const t=this;setTimeout((function(){t.sprite="https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_up.png"}),100),setTimeout((function(){t.sprite="https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_default.png"}),200)}ddr(t){this.userInputs.push(t)}},r=class{constructor(t,e){this.stage=t,this.isAnimated=e}animate(t){if(this.stage){let e=new Image;e.src=this.stage,this.isAnimated?e.onload=function(){t.clearRect(0,0,t.canvas.width,t.canvas.height),(o-=2)<=0&&(o=200,(h+=t.canvas.height)>=e.height&&(h=0)),t.drawImage(e,o,h,50,200,0,0,t.canvas.width,t.canvas.height)}:e.onload=function(){t.drawImage(e,0,0,t.canvas.width,t.canvas.height)}}else t.fillStyle="skyblue",t.fillRect(0,0,t.canvas.width,t.canvas.height)}},o=200,h=0;const n={test:new r("https://kennytram.github.io/Mayhem-Overload/assets/windrise-background.png",!1),blow:new r("https://kennytram.github.io/Mayhem-Overload/assets/blow/blow.png",!1),spaceBalloon:new r("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_background_og.png",!0),ddr:new r("https://kennytram.github.io/Mayhem-Overload/assets/ddr/dfloor.png",!1)},l={test:new a(null,"random",["player"]),blow:new a("https://kennytram.github.io/Mayhem-Overload/assets/blow/blow1.png","wallRight",["player"]),spaceBalloon:new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap_default.png","rightSide",["player"]),ddr:new a("https://kennytram.github.io/Mayhem-Overload/assets/ddr/neutral.png","bottomSide",["player"])},m={test:[],blow:[],spaceBalloon:[new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star1.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star2.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star3.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star4.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star1.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star2.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star3.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star4.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star1.png","random",["enemy","movingRight"]),new a("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon_star2.png","random",["enemy","movingRight"])],ddr:[new a("https://kennytram.github.io/Mayhem-Overload/assets/ddr/up_arrow1.png","topLeft",["friendly"])]},p={blow:new s(n.blow,l.blow,m.blow,new Audio("https://kennytram.github.io/Mayhem-Overload/assets/blow/thar_he_blows.mp3"),"blowBar","spaceButtonMash","Use Spacebar to Blow"),spaceBalloon:new s(n.spaceBalloon,l.spaceBalloon,m.spaceBalloon,new Audio("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/space_balloon.mp3"),"survive","flap","Spacebar to Flap"),ddr:new s(n.ddr,l.ddr,m.ddr,new Audio("https://kennytram.github.io/Mayhem-Overload/assets/ddr/dance.mp3"),"ddr","directions","Follow the Arrows")};let d=[];for(let t=1;t<10;t++)d.push(`https://kennytram.github.io/Mayhem-Overload/assets/timer${t}.png`);let c=[];for(let t=1;t<7;t++)c.push(`https://kennytram.github.io/Mayhem-Overload/assets/survival_timer${t}.png`);var g=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/victory.mp3"),y=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/blow/blow.ogg"),u=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/flap.mp3"),v=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/space_balloon/balloon_burst.mp3"),b=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/gameover.mp3"),w=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/correct.mp3"),f=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/wrong.mp3"),M=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/ddr/dance_select.mp3"),k=new Audio("https://kennytram.github.io/Mayhem-Overload/assets/loser.mp3");const _=[g,y,u,v,b,w,f,M,k];var O=null,T=!1,A=["m","q"];function P(){for(;A.length>2;)key.unbind(A.pop())}key("m",(()=>{T=!T;for(const t of _)t.pause();T||O!==_.at(-1)||_.at(-1).play()}));const x=document.querySelector("#canvas"),I=document.querySelector("#game_container");x.width=I.offsetWidth,x.height=I.offsetHeight;let S=!1;var B=new Audio("assets/title/main_menu.mp3");B.play(),B.volume=.3,key("m",(()=>{B&&(S=!S,B.pause(),S||B.play())})),key("q",(()=>{window.location.reload()}));const E=document.querySelector("#startButton");E.addEventListener("click",(function(){E.disabled=!0,B.pause(),B=null,clearInterval(L);const t=document.querySelector("#game_container");x.width=t.offsetWidth,x.height=t.offsetHeight,document.querySelector("#canvas").style.zIndex=2,(new class{constructor(){this.ctx=document.getElementById("canvas").getContext("2d"),this.scoreEle=document.getElementById("score"),this.dialogue=document.getElementById("dialogue"),this.timerBar=document.getElementById("timer_bar"),this.currTime=10,this.maxTime=10,this.score=0,this.lives=3,this.microgame=null,this.running=!1,this.currMicrogameFinished=!1,this.restart=!1,this.timerTimeout=null}play(){this.microgame=this.randomizeMicrogame(),this.microgame?(this.microgame.reset(this.ctx),P(),this.bindKeyHandlers(this.microgame),"survive"===this.microgame.objective&&(this.timerBar.src="https://kennytram.github.io/Mayhem-Overload/assets/survival_timer1.png"),this.resetTimer(),this.startTimer(),this.running=!0,this.animate()):console.log("NO MICROGAME WAS SELECTED")}randomizeMicrogame(){const t=Object.values(p),e=Math.floor(Math.random()*t.length);return t[e].reset(this.ctx),O=t[e].bgm,!T&&O&&O.play(),_.push(t[e].bgm),this.dialogue.innerHTML=t[e].dialogue,t[e]}animate(){if(!0===this.running){if(this.updateTimerbar(),!this.currMicrogameFinished&&!0===this.microgame.won||!0===this.restart||this.microgame.isGameOver&&this.lives>1){if(clearInterval(this.timerTimeout),this.microgame.timeOutFunc&&clearTimeout(this.microgame.timeOutFunc),P(),this.microgame.won=!1,this.restart||this.microgame.isGameOver||(this.incrementScore(),this.scoreEle.innerHTML=`Score: ${this.score}`),this.currMicrogameFinished=!0,g.paused&&!T&&!this.restart){for(const t of _)t.pause(),t.currentTime=0;this.microgame.isGameOver||g.play()}this.microgame.isGameOver&&(0===this.currTime?this.dialogue.innerHTML="SO ZETTA SLOW":this.dialogue.innerHTML="You Died",document.getElementById(`heart${this.lives}`).style.display="none",this.lives--,T||b.play()),this.restart=!1,this.microgame.isGameOver=!1,_.pop();const t=this;setTimeout((function(){t.microgame=t.randomizeMicrogame(),t.bindKeyHandlers(t.microgame),t.resetTimer(),t.startTimer(),t.currMicrogameFinished=!1}),2500)}else if(this.lives<=1&&this.microgame.isGameOver){P(),O=null,clearInterval(this.timerTimeout),this.dialogue.innerHTML="Game Over";const t=this;setTimeout((function(){t.dialogue.innerHTML="Press Q to Restart"}),3e3);for(const t of _)t.pause(),t.currentTime=0;"flap"===this.microgame.controlSetting&&(T||v.play()),document.getElementById(`heart${this.lives}`).style.display="none",this.lives--,T||k.play(),this.running=!1}else this.currTime>0&&!this.currMicrogameFinished&&(this.microgame.stageAnimate(this.ctx),this.microgame.spriteAnimate(this.ctx));window.requestAnimationFrame(this.animate.bind(this))}}incrementScore(){this.score++}startTimer(){this.reduceTime()}stopTimer(){clearTimeout(this.timerTimeout)}setMicrogame(t){this.microgame=t}reduceMaxTimer(){this.maxTime--}reduceTime(){const t=this;t.timerTimeout=setInterval((()=>{t.currTime--,0===t.currTime&&("survive"!=this.microgame.objective?(t.timerBar.src=d.at(-1),t.microgame.isGameOver=!0):t.timerBar.src=c.at(-1))}),1e3)}resetTimer(){"survive"===this.microgame.objective?(console.log("true"),this.currTime=5,this.timerBar.src=c[0]):(this.currTime=this.maxTime,this.timerBar.src=d[0])}updateTimerbar(){let t=Math.floor(this.maxTime/8);if("survive"===this.microgame.objective){t=1;for(let e=0;e<6;e++)if(this.currTime<t*e){this.timerBar.src=c.at(-1*e);break}}else for(let e=0;e<9;e++)if(this.currTime<t*e){this.timerBar.src=d.at(-1*e);break}}bindKeyHandlers(t){switch(t.controlSetting){case"test":key("w",(()=>this.microgame.player.move([0,-this.ctx.canvas.height/50],this.ctx))),key("s",(()=>this.microgame.player.move([0,this.ctx.canvas.height/50],this.ctx))),key("a",(()=>this.microgame.player.move([-this.ctx.canvas.width/50,0],this.ctx))),key("d",(()=>this.microgame.player.move([this.ctx.canvas.width/50,0],this.ctx))),key("up",(()=>this.microgame.player.move([0,-this.ctx.canvas.height/50],this.ctx))),key("down",(()=>this.microgame.player.move([0,this.ctx.canvas.height/50],this.ctx))),key("left",(()=>this.microgame.player.move([-this.ctx.canvas.width/50,0],this.ctx))),key("right",(()=>this.microgame.player.move([this.ctx.canvas.width/50,0],this.ctx))),key("space",(()=>this.microgame.player.jump())),A.push("w","s","a","d","up","down","left","right","space");break;case"spaceButtonMash":key("space",(()=>{this.microgame.fillBar(),y.paused&&!T&&y.play()})),A.push("space");break;case"flap":this.microgame&&(this.microgame.player.isMidAir=!0),key("a",(()=>this.microgame.player.move([-this.ctx.canvas.width/60,0],this.ctx))),key("d",(()=>this.microgame.player.move([this.ctx.canvas.width/60,0],this.ctx))),key("left",(()=>this.microgame.player.move([-this.ctx.canvas.width/60,0],this.ctx))),key("right",(()=>this.microgame.player.move([this.ctx.canvas.width/60,0],this.ctx))),key("space",(()=>{this.microgame.player.flap(),T||(u.currentTime=0,u.play())})),A.push("a","d","left","right","up","down","space");break;case"directions":key("w",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("up")})),key("s",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("down")})),key("a",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("left")})),key("d",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("right")})),key("up",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("up")})),key("down",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("down")})),key("left",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("left")})),key("right",(()=>{T||(M.currentTime=0,M.play()),this.microgame.player.ddr("right")})),A.push("w","s","a","d","up","down","left","right");break;default:console.log("keybind error")}}}).play()}));const H=["Let me be your CSS to your HTML","Fork my heart because Im ready to commit","I must be an exception because you have sure caught me","If I pull and push it in, know that I am already committing","If you were a function, Id call you everyday","We can merge, without conflicts","You are my number 0","I cant wait to inject my SQL into your application layer","Are you an API, because Id like to REST with you","Are you garbage because I want to collect you","Those who use git arent afraid to commit","Are you a ES6, youve got some standards","You had me at Hello World","Im overflowing with love for you","You wanna check out my private fields","Sudo make love to me","You dont have bugs, only features","I will debug all your code forever","Can I request a pull","I can resolve my promise to love you forever","... Hello World ..."];let W=1,L=setInterval((()=>{const t=Math.floor(Math.random()*H.length);document.getElementById("dialogue").innerHTML=H[t],W++}),4e3*W)}()}();
//# sourceMappingURL=main.js.map