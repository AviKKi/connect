
var $_inter;
var blueball = false;
var redball = false;
var deletewall = false;
var keyActions = { 37:'left',38:'up',39:'right',40:'down',35:'space'};
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var blocksize = 10;
var body = document.getElementById('body');
var walkersmsg = "Oops White Walkers";
var walke = false;
var drawBorder = function(){
	ctx.fillStyle = 'grey';
	ctx.fillRect(0,0,width,blocksize);
	ctx.fillRect(0,height-blocksize,width,blocksize);
	ctx.fillRect(0,0,blocksize,height);
	ctx.fillRect(width - blocksize,0,blocksize,height);
};
var circle = function(x,y,radius,color,fillCircle){
		ctx.beginPath();
		ctx.arc(x,y,radius,0,Math.PI*2,false);
		if(fillCircle){
			ctx.fillStyle = color;
      ctx.fill();
		}
};
var Ball = function(){

};
var startScreen = function(){
	ctx.clearRect(0,0,600,600);
	ctx.fillStyle = "#FFF";
	ctx.textAlign = 'center';
  ctx.font = "40px Serif";
	ctx.fillText("Connect",width/2,height/3);
	ctx.font = "30px Serif";
	ctx.fillText("Press Space to Start",width/2,height/2);
}
Ball.prototype.draw = function(x,y,color){
		  x-=5;
		  y-=4;
			ctx.strokeStyle = color;
			ctx.strokeRect(x,y,6,10);
			ctx.fillStyle = color;
			ctx.fillRect(x+6,y+3,14,2);
			ctx.fillRect(x+11,y+3,2,6);
			ctx.fillRect(x+16,y+3,2,9);
     };
Ball.prototype.checkcollision = function(){

    if(computer.x >= 120 && computer.x <= 140 &&  computer.y >= 10 &&  computer.y <= 30){
    	  blueball = true;
    	  deletewall = true;
        computer.xspeed = -5;
        computer.yspeed = -5;
        internet.xspeed = -5;
        internet.yspeed = -5;
    }
    if(internet.x >= 520 && internet.x <=555 && internet.y >= 550 && internet.y <= 570){
    	redball = true;
        computer.xspeed = 5;
        computer.yspeed = 5;
        internet.xspeed = 5;
        internet.yspeed = 5;
    }
}
var Comp = function(){
	  this.x = width-blocksize-20;
	  this.y = height-blocksize-20;
      this.xspeed = 5;
      this.yspeed = 5;
};
var Intern = function(){
	  this.x = blocksize;
	  this.y = blocksize;
      this.xspeed = 5;
      this.yspeed = 5;
};

var Enemycomp = function(){
      this.x = width/2;
      this.y = blocksize;
      this.xspeed = 5;
      this.yspeed = 5;
};

var Enemyintern = function(){
      this.x = width/2;
      this.y = height-blocksize-20;
      this.xspeed = 5;
      this.yspeed = 5;
};

Enemycomp.prototype.draw = function(){
        ctx.fillStyle = 'white' ;
        ctx.fillRect(this.x,this.y,20,20);

}

Enemyintern.prototype.draw = function(){
        ctx.fillStyle = 'white' ;
        ctx.fillRect(this.x,this.y,20,20);
}

Enemycomp.prototype.move = function(direction){
        if(direction == 'up'){
            this.y -= this.yspeed;
        }
        else if(direction == 'down'){

        	this.y += this.yspeed ;
        }
        else if(direction == 'left'){
        	this.x -= this.xspeed;

        }
        else if(direction == 'right'){
        	this.x += this.xspeed;

        }
        if(this.x<blocksize){
			this.x = blocksize;
		}
		else if(this.x>width-blocksize-20){
			this.x = width-blocksize-20;
		}
		else if(this.y<blocksize){
			this.y = blocksize;
		}
		else if(this.y>height-blocksize-20){
			this.y = height-blocksize-20;
		}
     }
Enemyintern.prototype.move = function(direction){
        if(direction == 'up'){
            this.y += this.yspeed;
        }
        else if(direction == 'down'){
        	this.y -= this.yspeed ;
        }
        else if(direction == 'left'){
        	this.x += this.xspeed;
        }
        else if(direction == 'right'){
        	this.x -= this.xspeed;
        }

        if(this.x<blocksize){
			this.x = blocksize;
		}
		else if(this.x>width-blocksize-20){
			this.x = width-blocksize-20;
		}
		else if(this.y<blocksize){
			this.y = blocksize;
		}
		else if(this.y>height-blocksize-20){
			this.y = height-blocksize-20;
		}
     }


Comp.prototype.draw = function(color){
	ctx.strokeStyle = 'white';
	ctx.strokeRect(this.x,this.y,20,16);
	ctx.strokeStyle = 'grey';
	ctx.strokeRect(this.x+2,this.y+2,16,12);
	ctx.fillStyle = "green";
	ctx.fillRect(this.x+3,this.y+5,3,3);
	ctx.fillRect(this.x+7.5,this.y+5,5,3);
	ctx.fillStyle = "white";
	ctx.fillRect(this.x+5,this.y+16,10,4);
};

Intern.prototype.draw = function(color){
	ctx.strokeStyle = 'blue';
    ctx.strokeRect(this.x,this.y,20,20);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x+10,this.y+12.5,3,0,Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.x+10,this.y+11,7,0,Math.PI,true);
    ctx.stroke();
    circle(this.x+10,this.y+16,2,'blue',true);
};

Comp.prototype.move = function(direction){
        if(direction == 'up'){
            this.y -= this.yspeed;
        }
        else if(direction == 'down'){

        	this.y += this.yspeed ;
        }
        else if(direction == 'left'){
        	this.x -= this.xspeed;

        }
        else if(direction == 'right'){
        	this.x += this.xspeed;

        }
        if(this.x<blocksize){
			this.x = blocksize;
		}
		else if(this.x>width-blocksize-20){
			this.x = width-blocksize-20;
		}
		else if(this.y<blocksize){
			this.y = blocksize;
		}
		else if(this.y>height-blocksize-20){
			this.y = height-blocksize-20;
		}
     }
Intern.prototype.move = function(direction){
        if(direction == 'up'){

            this.y += this.yspeed;
        }
        else if(direction == 'down'){

        	this.y -= this.yspeed ;
        }
        else if(direction == 'left'){
        	this.x += this.xspeed;

        }
        else if(direction == 'right'){
        	this.x -= this.xspeed;

        }

        if(this.x<blocksize){
			this.x = blocksize;
		}
		else if(this.x>width-blocksize-20){
			this.x = width-blocksize-20;
		}
		else if(this.y<blocksize){
			this.y = blocksize;
		}
		else if(this.y>height-blocksize-20){
			this.y = height-blocksize-20;
		}
     }

Comp.prototype.checkcollision = function(x,y,w,z,ide){
	if (this.x-2 < x + w && this.x + 25 > x && this.y-2 < y + z && 25 + this.y > y) {
           gameover(ide);
        }
}
Comp.prototype.collision = function(ide){
  if (this.x-2 < walk.x + 30 && this.x + 25 > walk.x && this.y-2 < walk.y + 160 && 25 + this.y > walk.y) {
           gameover(ide);
        }
  if (this.x-2 < walk2.x + 30 && this.x + 25 > walk2.x && this.y-2 < walk2.y + 160 && 25 + this.y > walk2.y) {
           gameover(ide);
        }
  if (this.x-2 < walk3.x + 30 && this.x + 25 > walk3.x && this.y-2 < walk3.y + 175 && 25 + this.y > walk3.y) {
           gameover(ide);
        }

}
Intern.prototype.checkcollision = function(x,y,w,z,ide){
	if (this.x-2 < x + w && this.x + 25 > x && this.y-2 < y + z && 25 + this.y > y) {
                   gameover(ide);
        }
}
Intern.prototype.collision = function(ide){
  if (this.x-2 < walk.x + 30 && this.x + 25 > walk.x && this.y-2 < walk.y + 160 && 25 + this.y > walk.y) {
           gameover(ide);
        }
  if (this.x-2 < walk2.x + 30 && this.x + 25 > walk2.x && this.y-2 < walk2.y + 160 && 25 + this.y > walk2.y) {
           gameover(ide);
        }
  if (this.x-2 < walk3.x + 30 && this.x + 25 > walk3.x && this.y-2 < walk3.y + 175 && 25 + this.y > walk3.y) {
           gameover(ide);
        }
}
Enemycomp.prototype.checkcollision = function(ide){
  if (this.x < computer.x + 20 && this.x + 20 > computer.x && <!-- blue , downred , anotherdownitself-->
      this.y < computer.y + 20 && 20 + this.y > computer.y) {
       walke = true;
       gameover(ide);
}
 if (this.x < internet.x + 20 && this.x + 20 > internet.x &&
      this.y < internet.y + 20 && 20 + this.y > internet.y) {
        walke = true;
       gameover(ide);
}
if (this.x < enemyr.x + 20 && this.x + 20 > enemyr.x &&
      this.y < enemyr.y + 20 && 20 + this.y > enemyr.y) {
        walke = true;
       gameover(ide);
}
}
Enemyintern.prototype.checkcollision = function(ide){
   if (this.x < computer.x + 20 && this.x + 20 > computer.x &&
      this.y < computer.y + 20 && 20 + this.y > computer.y) {
       walke = true;
       gameover(ide);
     }
   if (this.x < internet.x + 20 && this.x + 20 > internet.x &&
      this.y < internet.y + 20 && 20 + this.y > internet.y) {
        walke = true;
       gameover(ide);

     }
   if (this.x < enemyb.x + 20 && this.x + 20 > enemyb.x &&
      this.y < enemyb.y + 20 && 20 + this.y > enemyb.y) {
        walke = true;
       gameover(ide);
}
}
Enemycomp.prototype.wallcollision = function(x,y,w,z,ide){
      if (this.x-2 < x + w && this.x + 25 > x && this.y-2 < y + z && 25 + this.y > y) {
            walke = true;
           gameover(ide);
        }
}
Enemycomp.prototype.collision = function(ide){
      if (this.x-2 < walk.x + 30 && this.x + 25 > walk.x && this.y-2 < walk.y + 160 && 25 + this.y > walk.y) {
      	   walke = true;
           gameover(ide);
        }
  if (this.x-2 < walk2.x + 30 && this.x + 25 > walk2.x && this.y-2 < walk2.y + 160 && 25 + this.y > walk2.y) {  walke = true;
           gameover(ide);
        }
  if (this.x-2 < walk3.x + 30 && this.x + 25 > walk3.x && this.y-2 < walk3.y + 175 && 25 + this.y > walk3.y) {  walke = true;
           gameover(ide);
        }
}
Enemyintern.prototype.wallcollision = function(x,y,w,z,ide){
      if (this.x-2 < x + w && this.x + 25 > x && this.y-2 < y + z && 25 + this.y > y) {
            walke = true;
            gameover(ide);
        }
}
Enemyintern.prototype.collision = function(ide){
      if (this.x-2 < walk.x + 30 && this.x + 25 > walk.x && this.y-2 < walk.y + 160 && 25 + this.y > walk.y) {
      	walke = true;
           gameover(ide);
        }
  if (this.x-2 < walk2.x + 30 && this.x + 25 > walk2.x && this.y-2 < walk2.y + 160 && 25 + this.y > walk2.y) {  walke = true;
           gameover(ide);
        }
  if (this.x-2 < walk3.x + 30 && this.x + 25 > walk3.x && this.y-2 < walk3.y + 175 && 25 + this.y > walk3.y) {  walke = true;
           gameover(ide);
        }

}


var Dangerwall = function(){

}

var Walkwall = function(){
      this.x = 80;
      this.y = 70;
      this.xspeed = 3;
}

Walkwall.prototype.draw = function(){
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 1;
  ctx.strokeRect(this.x,this.y,30,160);
}

Walkwall.prototype.move = function(){
     this.x += this.xspeed;

     if(this.x<80 || this.x>250){
      this.xspeed = -this.xspeed;
     }
}

var Walkwall2 = function(){
      this.x = 480;
      this.y = 380;
      this.xspeed = -3;
}

Walkwall2.prototype.draw = function(){
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 1;
  ctx.strokeRect(this.x,this.y,30,160);
}

Walkwall2.prototype.move = function(){
     this.x += this.xspeed;

     if(this.x>480 || this.x<315){
      this.xspeed = -this.xspeed;
     }
}

var Walkwall3 = function(){
      this.x = 480;
      this.y = 70;
      this.xspeed = -5;
}

Walkwall3.prototype.draw = function(){
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 1;
  ctx.strokeRect(this.x,this.y,30,175);
}

Walkwall3.prototype.move = function(){
     this.x += this.xspeed;

     if(this.x>480 || this.x<315){
      this.xspeed = -this.xspeed;
     }
}

Dangerwall.prototype.draw = function(x,y,widthh,heightt,color){
	var brickHeight = 10;
	var brickWidth = 20;
	ctx.strokeStyle = color;
	ctx.lineWidth = 1;
	ctx.strokeRect(x,y,widthh,heightt);
	for(var i=y+brickHeight;i<y+heightt;i+=brickHeight){
		ctx.beginPath();
		ctx.moveTo(x, i);
		ctx.lineTo(x+widthh, i);
		ctx.stroke();
		//ctx.strokeRect(x,i,brickWidth,brickHeight);
	}
	for(var i=0;i<heightt/brickHeight;i++){
		var start = ( ((i%2==0)?0.5:1)) * brickWidth + x;
		for(;start<x+widthh;start+=brickWidth)
		{
			ctx.beginPath();
			ctx.moveTo(start, y+i*brickHeight);
			ctx.lineTo(start, y+((i+1)*brickHeight));
			ctx.stroke();
		}
	}
}

var gameoverState = true;
var walk = new Walkwall();
var walk2 = new Walkwall2();
var walk3 = new Walkwall3();
var ball = new Ball();
var computer = new Comp();
var internet = new Intern();
var wall = new Dangerwall();
var enemyb = new Enemycomp();
var enemyr = new Enemyintern();
var firstRun = true;
var bodyy = document.getElementById('body');
     bodyy.onkeydown = function(event){

     	if(event.keyCode == 32){
					if(firstRun){
						firstRun = false;
						showManual();
					}
					else if(gameoverState){
     	      currentLevel();
     	    }
     	 }
     	else {
     	  var direction = keyActions[event.keyCode];
     	  computer.move(direction);
     	  internet.move(direction);
     	  enemyb.move(direction);
     	  enemyr.move(direction);
     	}
     }

var gameover = function(x){
		clearInterval(x);
		gameoverState = true;
		ctx.font = '35px Serif';
		ctx.fillStyle = 'red';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		if(walke == true){ctx.fillText(walkersmsg,width/2,height/2);}
		else{ctx.fillText("Oops Burned In Firewall!!! :(",width/2,height/2);}
		ctx.font = '26px Serif';
		ctx.fillText("Gameover :(",width/2,height/2+50);
		ctx.font = '20px Serif';
		ctx.fillStyle = 'white';
		ctx.fillText("Press space to restart :)",width/2,height/2+80);
	};
var manualId = 1;
var typeWritterWrite = function(str, startX, startY, lineHeight, padding){
	"use strict";
    var cursorX = startX || 0;
    var cursorY = startY || 0;
    var lineHeight = lineHeight || 32;
    padding = padding || 10;
    var i = 0;
    $_inter = setInterval(function() {
        var rem = str.substr(i);
        var space = rem.indexOf(' ');
        space = (space === -1)?str.length:space;
        var wordwidth = ctx.measureText(rem.substring(0, space)).width;
        var w = ctx.measureText(str.charAt(i)).width;
        if(cursorX + wordwidth >= canvas.width - padding) {
            cursorX = startX;
            cursorY += lineHeight;
        }
        ctx.fillText(str.charAt(i), cursorX, cursorY);
        i++;
        cursorX += w;
    }, 30);
};
var showManual = function() {
	"use strict";
	switch(manualId) {
		case 1:
			var manualTextBlob = "DAY-1 : Silly Sam(my colleague) has again run some fisky commands on my work computer, please help me to connect to network, find your way through firewalls.";
			break;
		case 2:
			var manualTextBlob = "DAY-2 : Silly Sam is learning authentication managment, he created a nice authentication program for me but I lost the keys. Please find all the keys and connect to the network,(you'll discover some of his anti-trespassing code along your way).";
			break;
		case 3:
			var manualTextBlob = "DAY-3 : Silly Sam is very influenced by Game of Thrones series, he has made some AI white walkers, stay away from them and don't trigger firewalls(white walkers are not that intelligent ;)";
			break;
		case 4:
			var manualTextBlob = "DAY-4 : Silly Sam is done with TV series and is into advanced security firewalls.";
			break;
		case 5:
			var manualTextBlob = "DAY-5 : Sadly Silly Sam is resigning from his job, so he made one last master piece to keep me busy for several days.";
	}
	ctx.clearRect(0,0,600,600);
	ctx.fillStyle = "green";
	ctx.textAlign = "left";
	ctx.font = "24px sans-serif";
	typeWritterWrite(manualTextBlob, 10, 30,32,10);
	gameoverState = true;

}
var level1 = function(){
	clearInterval($_inter);
	gameoverState = false;
    computer.x = width-blocksize-20;;
    internet.x = blocksize;
    computer.y = height-blocksize-20;
    internet.y = blocksize;
	manualId = 2;


arrayp = [[80,50,30,160],[width-blocksize-100,height-blocksize-150,30,150],[170,220,30,160],[400,330,30,160],[285,200,30,80],[285,320,30,80],[225,420,30,80],[330,220,90,30],[80,380,30,160],[130,80,80,30],[135,540,80,30],[width-blocksize-100,50,30,160]]
IntervalId = setInterval(function(){

              ctx.clearRect(0,0,width,height);
              drawBorder();
              ctx.font = '20px Courier';
              ctx.fillStyle = 'Yellow';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText("Day-1",290,30);
              computer.draw('blue');
              internet.draw('red');
              for(var i=0;i<arrayp.length;i++){
                 wall.draw(arrayp[i][0],arrayp[i][1],arrayp[i][2],arrayp[i][3],'green')
              }
              for(var i=0;i<arrayp.length;i++){
                computer.checkcollision(arrayp[i][0],arrayp[i][1],arrayp[i][2],arrayp[i][3],IntervalId);
                internet.checkcollision(arrayp[i][0],arrayp[i][1],arrayp[i][2],arrayp[i][3],IntervalId);
              }
              if(computer.x == internet.x && computer.y == internet.y){
									clearInterval(IntervalId);
									ctx.font = 'bold 35px Courier';
									ctx.fillStyle = 'white';
									ctx.textAlign = 'center';
									ctx.textBaseline = 'middle';
									ctx.fillText("Well Done!!",width/2,(height/2)-120);
									setTimeout(function(){showManual();
									currentLevel = level2;}, 2500);
              }
              ctx.strokeRect(0,0,width,height);
     },30)
};
var currentLevel = level1;
var level2 = function(){
	clearInterval($_inter);
	manualId = 3;
	gameoverState = false;
    currentLevel = level2;
    clearInterval(IntervalId);
    computer.x = width-blocksize-20;
    computer.xspeed = 5;
    computer.yspeed = 5;
    internet.xspeed = 5;
    internet.yspeed = 5;
    internet.x = blocksize;
    computer.y = height-blocksize-20;
    internet.y = blocksize;
	blueball = false;
	redball = false;
	deletewall = false;
    arrayp = [[80,50,30,160],[width-blocksize-100,height-blocksize-150,30,150],[170,220,30,160],[400,330,30,160],[285,200,30,80],[285,320,30,80],[225,420,30,80],[330,220,90,30],[80,380,30,160],[135,540,80,30],[width-blocksize-100,50,30,160]]
	  IntervalId2 = setInterval(function(){
        ctx.clearRect(0,0,width,height);
        drawBorder();
        ctx.font = '20px Courier';
        ctx.fillStyle = 'Yellow';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText("Day-2",290,30);
        computer.draw('blue');
        internet.draw('red');
        if(blueball == false){
        	ball.draw(125,25,'white');
        	ball.checkcollision();
        }
        if(redball == false){
        	ball.draw(width-blocksize-50,height-blocksize-15,'blue');
        	ball.checkcollision();
        }
        for(var i=0;i<arrayp.length;i++){
        wall.draw(arrayp[i][0],arrayp[i][1],arrayp[i][2],arrayp[i][3],'green')
        }
              if(deletewall == false){
              wall.draw(130,80,80,30,'green');
              computer.checkcollision(130,80,80,30,IntervalId2);
              internet.checkcollision(130,80,80,30,IntervalId2);
              }
              for(var i=0;i<arrayp.length;i++){
                computer.checkcollision(arrayp[i][0],arrayp[i][1],arrayp[i][2],arrayp[i][3],IntervalId2);
                internet.checkcollision(arrayp[i][0],arrayp[i][1],arrayp[i][2],arrayp[i][3],IntervalId2);
              }
            if(computer.x == internet.x && computer.y == internet.y && blueball ==true && redball == true){
							clearInterval(IntervalId2);
							ctx.font = 'bold 35px Courier';
							ctx.fillStyle = 'white';
							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillText("Good work!!", width/2, (height/2)-120);
							ctx.fillText("Stealing the keys.", width/2,((height/2)+45)-120);
							setTimeout(function(){showManual();
							currentLevel = level3;}, 2500);
              }
        ctx.strokeRect(0,0,width,height);
	},30)
};

var level3 = function(){
	   clearInterval($_inter);
		manualId = 4;
		currentLevel = level3;
		gameoverState = false;
    var array = [[80,50,30,160],[width-blocksize-100,height-blocksize-150,30,150],[width-blocksize-100,50,30,150],[285,200,30,80],[285,320,30,80],[220,260,30,80],[350,260,30,80],[80,350,30,160],[340,180,80,30]]
    clearInterval(IntervalId2);
        walke = false;
		enemyb.x = width/2;
		enemyb.y = blocksize;
		enemyr.x = width/2;
		enemyr.y = height-blocksize-20;
    computer.x = blocksize;
    internet.x = width-blocksize-20;
    computer.y = blocksize;
    internet.y = height-blocksize-20;
    IntervalId3 = setInterval(function(){
    ctx.clearRect(0,0,width,height);
    drawBorder();
    ctx.font = '20px Courier';
    ctx.fillStyle = 'Yellow';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Day-3",290,30);
    computer.draw('blue');
    enemyb.draw();
    enemyb.checkcollision(IntervalId3);
    internet.draw('red');
    enemyr.draw();
    enemyr.checkcollision(IntervalId3);
    for(var i=0;i<array.length;i++){
    wall.draw(array[i][0],array[i][1],array[i][2],array[i][3],'green')
    }
    for(var i = 0;i<array.length;i++){
      enemyb.wallcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId3);
      enemyr.wallcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId3);
    }
    for(var i=0;i<array.length;i++){
                computer.checkcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId3);
                internet.checkcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId3);
    }
    if(computer.x == internet.x && computer.y == internet.y){
			clearInterval(IntervalId3);
			ctx.font = 'bold 35px Courier';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText("Congrats!!",width/2,(height/2)-120);
			ctx.fillText("You survived the winters!!",width/2,((height/2)+45)-120);
			setTimeout(function(){showManual();
			currentLevel = level4;}, 2500);
              }
    ctx.strokeRect(0,0,width,height);
  },30)
};

var level4 = function(){
		manualId = 5;
		clearInterval($_inter);
    currentLevel = level4;
    gameoverState = false;
    array = [[100, 270, 30, 80], [470, 270, 30, 80], [240, 250, 120, 20], [240, 340, 120, 20] ]
    enemyb.x = width/2;
    enemyb.y = height-blocksize-20;
    enemyr.x = width/2;
    enemyr.y = blocksize;
    computer.x = width-blocksize-20;
    internet.x = blocksize;
    computer.y = height-blocksize-20;
    internet.y = blocksize;
    clearInterval(IntervalId3);
    walke = false;
    IntervalId4 = setInterval(function(){
    ctx.clearRect(0,0,width,height);
    drawBorder();
    computer.draw('blue');
    internet.draw('red');
    computer.collision(IntervalId4);
    internet.collision(IntervalId4);
    ctx.strokeRect(0,0,width,height);
    ctx.font = '20px Courier';
    ctx.fillStyle = 'Yellow';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Day-4",290,30);
    enemyb.draw();
    enemyb.checkcollision(IntervalId4);
    enemyr.draw();
    enemyr.checkcollision(IntervalId4);
    for(var i = 0;i<array.length;i++){
      enemyb.wallcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId4);
      enemyr.wallcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId4);
      enemyb.collision(IntervalId4);
      enemyr.collision(IntervalId4);
    }
    walk.draw();
    walk.move();
    walk2.draw();
    walk2.move();
    walk3.draw();
    walk3.move();
    for(var i=0;i<array.length;i++){
    wall.draw(array[i][0],array[i][1],array[i][2],array[i][3],'green')
    }
    for(var i=0;i<array.length;i++){
                computer.checkcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId4);
                internet.checkcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId4);
    }
    if(computer.x == internet.x && computer.y == internet.y){
			clearInterval(IntervalId4);
			ctx.font = 'bold 35px Courier';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText("#HackerMan", width/2, (height/2)-120);
			ctx.fillText("You snooped though all", width/2, ((height/2)+45)-120);
			ctx.fillText("the firewalls.", width/2, ((height/2)+90)-120);
			setTimeout(function(){showManual();
			currentLevel = level5;}, 2500);
              }
    ctx.strokeRect(0,0,width,height);
    },30);
};
var level5 = function(){
  currentLevel = level5;
  clearInterval($_inter);
  gameoverState = false;
  array = [[80,50,30,160],[width-blocksize-100,height-blocksize-150,30,150],[170,220,30,160],[400,330,30,160],[285,200,30,80],[285,320,30,80],[225,420,30,80],[330,220,90,30],[80,380,30,160],[130,80,80,30],[135,540,80,30],[width-blocksize-100,50,30,160]]
  clearInterval(IntervalId4);
  walke = false;
  enemyb.x = width/2;
  enemyb.y = blocksize;
  enemyr.x = width/2;
  enemyr.y = height-blocksize-20;
  computer.x = width-blocksize-20;;
    internet.x = blocksize;
    computer.y = height-blocksize-20;
    internet.y = blocksize;
  IntervalId5 = setInterval(function(){
    ctx.clearRect(0,0,width,height);
    drawBorder();
    ctx.font = '20px Courier';
    ctx.fillStyle = 'Yellow';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Day-5",290,30);
    computer.draw('blue');
    internet.draw('red');
    enemyb.draw();
    enemyb.checkcollision(IntervalId5);
    enemyr.draw();
    enemyr.checkcollision(IntervalId5);
    for(var i=0;i<array.length;i++){
    wall.draw(array[i][0],array[i][1],array[i][2],array[i][3],'green')
    }
    for(var i = 0;i<array.length;i++){
      enemyb.wallcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId5);
      enemyr.wallcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId5);
    }
    for(var i=0;i<array.length;i++){
                computer.checkcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId5);
                internet.checkcollision(array[i][0],array[i][1],array[i][2],array[i][3],IntervalId5);
    }
  if(computer.x == internet.x && computer.y == internet.y){
			clearInterval(IntervalId5);
			ctx.font = 'bold 35px Courier';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText("You WON!!!!!!!",width/2,(height/2)-120);
			setTimeout(function(){window.location.reload();}, 5000);
  }
  ctx.strokeRect(0,0,width,height);
    },30);
};
