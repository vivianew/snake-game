var Snake = function(){

    var speed = 5;              // Speed of the snake
    var direction = 100;        // The angle of the movement 0 <-> 360
    var turnSpeed = 0.085;
    var position = {
        "x": window.innerWidth / 2,
        "y": window.innerHeight / 2

    };

    var length = 30;
    this.snakeBody = [];
    this.snakeHead = null;
    var snakeHead = null;
    var gameboard = document.getElementById("gameboard");
    var self = this;

    
    var createSnakeBody = function( x, y){

        var bodyPart = document.createElement('div');
        bodyPart.classList.add("snakeBody");
        bodyPart.style.top = y + "px";
        bodyPart.style.left = x + "px";
        gameboard.appendChild(bodyPart);
        self.snakeBody.push(bodyPart);
    }


    var initSnake = function() {
        var body_x = position.x;
        var body_y = position.y;


        self.snakeHead = document.createElement('div');
        self.snakeHead.classList.add("snakeHead");
        self.snakeHead.style.top = body_y + "px";
        self.snakeHead.style.left = body_x + "px";
        gameboard.appendChild( self.snakeHead);


        for(var i = 0; i<length;i++){
            body_y -= 15;
            createSnakeBody(body_x, body_y);
        }
    }


    var switchDirection = function(movement){
        if(movement.left){
            direction -= turnSpeed;
        }

        if(movement.right){
            direction += turnSpeed;
        }
    }

    var move = function(){

        var current_x = self.snakeHead.style.left;
        var current_y = self.snakeHead.style.top;
        for(var i = 0; i<self.snakeBody.length; i++) {

            var old_x = self.snakeBody[i].style.left;
            var old_y = self.snakeBody[i].style.top;

            self.snakeBody[i].style.top = current_y;
            self.snakeBody[i].style.left = current_x;

            current_y = old_y;
            current_x = old_x;
        }

        position.x += Math.cos(direction) * speed;
        position.y += Math.sin(direction) * speed;
        self.snakeHead.style.top = position.y + "px";
        self.snakeHead.style.left = position.x + "px";
    }

 

    this.render = function (movement) {

        if(movement.left || movement.right){
            switchDirection(movement);
        }

        move();

    };

    initSnake();

}