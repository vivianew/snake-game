var Gameboard = function(){

    /*
     *   Game variables
     */
//PLAYERS: snake & snake1
    var snakePlayer1 = new Snake("player1");
    var snakePlayer2 = new Snake("player2");
 
    var firstFood = new Food();
    var secondFood = new Food();
    
    /*
     *   Game environment
     */
    var height = window.innerHeight;
    var width  = window.innerWidth;
    var movement = {
        "player1": {
            "left": false,
            "right": false
        },
        "player2": {
            "left": false,
            "right": false
        }
    };


    function collisionDetectionBetweenTwoRect(rect1, rect2){

        return  rect1.left < rect2.left + rect2.width &&
                rect1.left + rect1.width > rect2.left &&
                rect1.top < rect2.top + rect2.height &&
                rect1.height + rect1.top > rect2.top;
    }


    // Call gameBoard.reset(); in the HTML

    this.reset = function(){


        var winnerBoard = document.getElementById("winner");
        winnerBoard.style.display = "none";

        var gameBoard = document.getElementById("gameboard");
        gameBoard.innerHTML = "";

        snakePlayer1 = new Snake("player1");
        snakePlayer2 = new Snake("player2");
        firstFood = new Food();
        secondFood = new Food();
    }



    function winner(enemy){

        var winnerBoard = document.getElementById("winner");
        winnerBoard.style.display = "block";

        var displayName = document.getElementById("winnerName");
        displayName.innerText = "The winner is " + enemy.playerName;

    }


    function collisionDetection(player, enemy){

        // Collision detection for firstFood

        // Are all elements available ? If not, no need to check for collision
        if(!(firstFood.foodElement && player.snakeHead)){
            return;
        }

        // Find elements
        var foodRect = firstFood.foodElement.getClientRects()[0];
        var snakeRect = player.snakeHead.getClientRects()[0];


        // Calculate if there a collision
        if(collisionDetectionBetweenTwoRect(foodRect, snakeRect)) {
            // collision detected!
            firstFood.foodElement.remove();
            firstFood = new Food();
            player.grow();
        }

        // Collision detection for secondFood


        // Are all elements available ? If not, no need to check for collision
        if(!(secondFood.foodElement && player.snakeHead)){
            return;
        }

        // Find elements
        var foodRect = secondFood.foodElement.getClientRects()[0];

        // Calculate if there a collision
        if(collisionDetectionBetweenTwoRect(foodRect, snakeRect)) {
            // collision detected!
            secondFood.foodElement.remove();
            secondFood = new Food();
            player.grow();
        }


        // A player dies if the players hits the tail of the the enemy

        var enemyBody = enemy.snakeBody;
        enemyBody.forEach(function(enemyBodyPart, index){

            var enemyBodyPartRect = enemyBodyPart.getClientRects()[0];
            var gameboard = document.getElementById('gameboard');

            if(collisionDetectionBetweenTwoRect(enemyBodyPartRect, snakeRect)) {
                // collision detected!
                console.log("Player dies");
                enemy.winner = true;
                winner(enemy);
   
            }
        });
    }


    /*
     * Event listeners
     */

    //For the 1st player = snake
    document.addEventListener('keydown', function(e) {

        switch(e.keyCode){
            case 37:
                movement.player1.left = true;
                break;
            case 39:
                movement.player1.right = true;
                break;
            case 81:
                movement.player2.left = true;
                break;
            case 68:
                movement.player2.right = true;
                break;
            default:
        }
    });

    document.addEventListener('keyup', function(e) {

        switch(e.keyCode){
            case 37:
                movement.player1.left = false;
                break;
            case 39:
                movement.player1.right = false;
                break;
            case 81:
                movement.player2.left = false;
                break;
            case 68:
                movement.player2.right = false;
                break;
            default:
        }

    });


    function render(){
        snakePlayer1.render(movement);
        snakePlayer2.render(movement);
        collisionDetection(snakePlayer1, snakePlayer2);
        collisionDetection(snakePlayer2, snakePlayer1);

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