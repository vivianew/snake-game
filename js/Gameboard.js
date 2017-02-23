var Gameboard = function(){

    /*
     *   Game variables
     */
//PLAYERS: snake & snake1
    var snake = new Snake();
    var snake1 = new Snake();

	//Differentiate the second snake from the first
    var q = document.getElementsByClassName("snakeHead")
    var s = q[1];
    s.setAttribute("id", "player2");


    // var food = [ food objects ];


    var food = new Food();
    // var food1 = new Food();
// 
    
    /*
     *   Game environment
     */
    var height = window.innerHeight;
    var width  = window.innerWidth;
    var movement = {
        "left": false,
        "right": false
    }


    // Collision detection for food
    function collisionDetection(){


     //   foods.forEach(function())

      // Are all elements available ? If not, no need to check for collision 
      if(!(food.foodElement && snake.snakeHead)){
        return;
      }
    
      // Find elements 
      var foodRect = food.foodElement.getClientRects()[0];
      var snakeRect = snake.snakeHead.getClientRects()[0];

            
        // Calculate if there a collision
      if(foodRect.left < snakeRect.left + snakeRect.width &&
         foodRect.left + foodRect.width > snakeRect.left &&
         foodRect.top < snakeRect.top + snakeRect.height &&
         foodRect.height + foodRect.top > snakeRect.top) {
         // collision detected!

         console.log("collision detected");
         food.foodElement.style.backgroundColor = "blue";

         deleteFood();
         init();
         
        }
    }


//collision w/ with the snake and its tail
function collisionSnakeTail() {

     
        //find elements 
        var snakeHead = snake.snakeHead.getClientRects()[0];
        var snakeBody = snake.snakeBody.getClientRects()[0];

        if (snakeHead.left < snakeBody.left + snakeBody.width &&
            snakeHead.left + snakeHead.width >
            snakeRect.left && 
            snakeHead.top < snakeBody.top + snakeBody.height &&
            snakeHead.height + snakeHead.top > snakeBody.top) {

            console.log("tail's touched!");
}
}

var B = document.getElementById("B");

  function init(){ //function to create a new food element (randomly)
    
         position = {
            "r": parseInt(window.innerWidth * Math.random()) ,
            "s": parseInt(window.innerHeight * Math.random())
        }; //has to be parseInt for CSS


        self.foodElement = document.createElement('div');
        self.foodElement.classList.add("foodPart");
        self.foodElement.style.top = position.s + "px";
        self.foodElement.style.left = position.r + "px";
        B.appendChild(self.foodElement);
    }
        init();


 function deleteFood() {
	var b = document.getElementsByClassName('foodPart');

	B.removeChild(B.firstChild);
	}
    



//add new element in the array which is the snake's body

/*  function growSnake() {
		var gameboard = document.getElementById("gameboard");
		var tail = document.createElement('div');
		tail.classList.add("snakeBody");
		gameboard.appendChild(tail);
		snakeBody.push(tail);
		console.log("bigger")
	}

*/
    /*
     * Event listeners
     */
//For the 1st player = snake
    document.addEventListener('keydown', function(e) {

        switch(e.keyCode){
            case 37:
                movement.left = true;
                break;
            case 39:
                movement.right = true;
                break;
            default:
        }
    });

    document.addEventListener('keyup', function(e) {

        switch(e.keyCode){
            case 37:
                movement.left = false;
                break;
            case 39:
                movement.right = false;
                break;
            default:
        }

    });


//keyCode for the 2nd player = snake1

 document.addEventListener('keydown', function(f) {

  		switch(f.keyCode){
            case 81:
               go.left = true;
                break;
           	case 68:
               go.right = true;
               	break;
           default:
        }
    });
    document.addEventListener('keyup', function(f) {

  		switch(f.keyCode){
            case 81:
               go.left = false;
                break;
           	case 68:
               go.right = false;
               	break;
           default:
        }
    });


    function render(){
        snake.render(movement);
        collisionDetection();
        //snake.s.render(go);
        
    }

    /*
     *  Game loop
     */
    function animloop(){
        window.requestAnimFrame(animloop);
        render();
    };

    animloop();
}



window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var gameBoard = new Gameboard();