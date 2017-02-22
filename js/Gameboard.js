var Gameboard = function(){

    /*
     *   Game variables
     */

    var snake = new Snake();
    // var food = [ food objects ];


    var food = new Food();
    var food1 = new Food();


    /*
     *   Game environment
     */
    var height = window.innerHeight;
    var width  = window.innerWidth;
    var movement = {
        "left": false,
        "right": false
    }


    // Collision detection
    function collisionDetection(){

function checkCollision(Snake, Food) {

    var Snake = document.getElementsByClassName('snakeHead');
    var Food = document.getElementsByClassName('foodPart');

<<<<<<< HEAD
   if (snakeHead.position.y === foodPart.position.r && snakeHead.position.x === foodPart.position.s) {
    return true;
    console.log("impact");
   }
}
=======
      // Are all elements availible ?
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
        }
    }
>>>>>>> 0bee2a7e96575dd74c391847c2d223f913bcf47c

    /*
     * Event listeners
     */

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

    function render(){
        snake.render(movement);
        collisionDetection();
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


