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

function checkCollision(Snake, Food) {

    var Snake = document.getElementsByClassName('snakeHead');
    var Food = document.getElementsByClassName('foodPart');

   if (snakeHead.position.y === foodPart.position.r && snakeHead.position.x === foodPart.position.s) {
    return true;
    console.log("impact");
   }
}

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


