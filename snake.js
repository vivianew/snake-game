

// board: Keep the snakes within or not? might be too hard with two players to only keep em inside

// board: Keep the snakes within or not? might be too hard with two players 

// Viewport
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

// SNAKE OBJECT: Body of the snakes
var Snake = function () { //beginning of the game, the body of the snake is 5/6 circles long? 
	var length = 5;
	Snake = ['posX', 'posY', 'posR', 'posS'];
	
}




// 2 players aka 2 snakes
var snake1 = new Snake();
var snake2 = new Snake();


// Initial Snake1 Position
var posX = window.innerWidth / 2;
var posY = window.innerHeight / 2;

// Initial Snake2 Position
var posR = window.innerWidth / 3;
var posS = window.innerHeight / 3;


// Set Snake1 position
var snake1 = document.getElementByClass("snake");
snake.style.top = posX;
snake.style.top = posY;


// Set Snake2 position
var snake2 = document.getElementByClass("snake");
snake.style.top = posR;
snake.style.top = posS;







// Snakes on the move
	var moving = function() {
for (var i = snake.length - 1; i >= 0; i--) {

	snake.splice(-1, 1); //remove item from the end of the array and remove one item (index, how many item)
}} //am i repeating myself here? (OR: snake.pop?)



// Snakes eating food 
	var eating = function() {
//adds new circle at the FRONT not end of the array 
for (var i = length; i >= 0; i++){
	snake.unshift('x', 'y');
	} 
}


// FOOD 

// food 



	// Food can appear randomly
	var food = getElementByID("food");
	food = function(x, y) { 
			x: Math.random(),
			y: Math.random()
		} 
//Math.random --> returns a random number from O up to but not including 1
//Math.floor --> rounds a number downwards to the nearest integer 

	//food is always appearing 
	for (var i = length - 1; i >= 0; i--) {
		//snakeBody's coordinates
		var snakeX = snake[i].x;
		var snakeY = snake[i].y;

	//but food has to appear where bodySnake is not
		if (food.x === snakeX || food.y === snakeY) {
			food.x = Math.random();
			food.y = Math.random();
		}
	}



// COLLISIONS

	//collision with FOOD
	var collisionFood = function() {
if (snakeX == food.x && snakeY == food.y) {

	return true; 
	eating(); // snake grows bigger
	speed(++);
	food(); //new food appears 
	scorePoint();
} else {
	return false;
	moving(); // snake keeps moving 
}}

	//collision of the snake and its own body
	var collisionBody = function() {
if (snakeX == snakeX && snakeY == snakeY ) {	
	return true;
	loose();
	console.log("HA YOU LOST!")
	} };



	//collision of the snake1 and snake2





// GAME STATES: earn points & loose
	
	//score
var scorePoint = function () { //food eaten by the snake
	score = [];
 if (collisionFood == true) {
 	score.push(1); // add a point into the score array
 }
}
	//loose
var loose = function() {
 if (collisionBody == true) {
 	//STOP THE GAME, HOW?????
 }
}
	//Lose if the checkCollision happens aka when the snake touches its own body 
//if (checkCollision = true) {
	// RESET THE GAME // create a reset variable?
//}
var reset = function () {

}




// For the Player to make the snake MOVE
//snake can't go directly to the right if it's going left because otherwise it'll touch itself 




     

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;


document.addEventListener('keydown', function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = true;
      break;
    case 40:
      keyDOWN = true;
      break;
    case 37:
      keyLEFT = true;
      break;
    case 39:
      keyRIGHT = true;
      break;
    default:
  }
});

document.addEventListener('keyup', function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = false;
      break;
    case 40:
      keyDOWN = false;
      break;
    case 37:
      keyLEFT = false;
      break;
    case 39:
      keyRIGHT = false;
      break;
    default:
  }
  
});



function render(){
  
  if(keyUP){
    y -= speed;
  }
  
  if(keyDOWN){
    y += speed;
  }
  
  if(keyLEFT){
    x -= speed;
  }
  
  if(keyRIGHT){
    x += speed;
  }

snake.style.top = posX;
snake.style.top = posY;

}


