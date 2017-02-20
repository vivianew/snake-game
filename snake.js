window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


<<<<<<< HEAD
// board: Keep the snakes within or not? might be too hard with two players to only keep em inside
=======
// board: Keep the snakes within or not? might be too hard with two players 

function edgedetect() {}
>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf



// Initial Snake Position
var X = window.innerWidth / 2;
var Y = window.innerHeight / 2;
var speed = 10;

// Set Snake position
var snake = document.getElementByID("snake"); 
<<<<<<< HEAD

=======
snake.style.top = Y;
snake.style.top = X; 
>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf


// Body of the snakes

<<<<<<< HEAD
var bodySnake = function () { //beginning of the game, the body of the snake is 5/6 circles long? 
	var length = 5;
	this.posX = 0
	this.posY = 0;
	this.speed = 1;
	snake = ['posX', 'posY'];
	
}

// 2 players aka 2 snakes
var snake1 = new bodySnake();
var snake2 = new bodySnake();

=======
var bodySnake = function () { //beginning of the game, the body of the snake is 6 circles long 
	var length = 5;
	snake = [];

	
}

>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf


// Snakes on the move
	var moving = function() {
for (var i = snake.length - 1; i >= 0; i--) {
<<<<<<< HEAD
	snake.splice(-1, 1); //remove item from the end of the array and remove one item (index, how many item)
}} //am i repeating myself here? (OR: snake.pop?)


=======
	snake.splice(-1, 1); //remove item from the end of the array and remove one item
}} //am i repeating myself here?
>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf

// Snakes eating food 
	var eating = function() {
//adds new circle at the FRONT not end of the array 
for (var i = length; i >= 0; i++){
	snake.unshift('x', 'y');
	} 
}

<<<<<<< HEAD
// FOOD 
=======
// food 
>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf

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


<<<<<<< HEAD
	//collision of the snake1 and snake2




=======
>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf
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

<<<<<<< HEAD
=======
document.addEventListener('keywdown', function(e) {

	
        switch (keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
      
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                
            }
            break;
        }};


    









>>>>>>> 29f35a2e0bd2f3fa1ae922d85ffd785498d54ddf
