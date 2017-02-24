var Snake = function(player){

    var speed = 5;              // Speed of the snake
    var direction = 100;        // The angle of the movement 0 <-> 360
    var turnSpeed = 0.085;
    var position = {
        "x": window.innerWidth / 2,
        "y": window.innerHeight / 2

    };

    var length = 10;
    this.snakeBody = [];
    this.snakeHead = null;
    var snakeHead = null;
    var gameboard = document.getElementById("gameboard");
    var self = this;


    this.grow = function(){
        var bodyPart = document.createElement('div');
        bodyPart.classList.add("snakeBody");
        bodyPart.classList.add("snake");
        bodyPart.style.top = this.snakeBody[length-1].style.top;
        bodyPart.style.left = this.snakeBody[length-1].style.left;
        length++;
        speed++;
        gameboard.appendChild(bodyPart);
        self.snakeBody.push(bodyPart);
    }

    
    var createSnakeBody = function( x, y){
        var bodyPart = document.createElement('div');
        bodyPart.classList.add("snakeBody");
        bodyPart.classList.add("snake");
        bodyPart.style.top = y + "px";
        bodyPart.style.left = x + "px";
        gameboard.appendChild(bodyPart);
        self.snakeBody.push(bodyPart);
    }


    var initSnake = function() {


        if(player == "player1"){
            position.x = window.innerWidth - 100;
        }else{

            position.x = 100;
        }


        var body_x = position.x;
        var body_y = position.y;

        self.snakeHead = document.createElement('div');
        self.snakeHead.classList.add("snakeHead");
        self.snakeHead.classList.add("snake");
        self.snakeHead.style.top = body_y + "px";
        self.snakeHead.style.left = body_x + "px";
        gameboard.appendChild( self.snakeHead);

        for(var i = 0; i<length;i++){
            body_y -= 15;
            createSnakeBody(body_x, body_y);
        }
    }


    var switchDirection = function(movement){
        if(movement[player].left){
            direction -= turnSpeed;
        }

        if(movement[player].right){
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

//Make the snakes come back in the screen
        if (position.x <0){
            position.x = window.innerWidth;
        }

        if (position.x > window.innerWidth) {
            position.x=0;
        }

        if (position.y <0) {
            position.y = window.innerHeight;
        }   

        if (position.y > window.innerHeight) {
            position.y=0;
        }




    }

    this.render = function (movement) {

        if(movement[player].left || movement[player].right){ // We are using a variable for the key. So just like arrays
            switchDirection(movement);
        }

        move();
    };

    initSnake();

}