var Food = function() {

    var position = {
        "x": window.innerWidth / 3,
        "y": window.innerHeight / 3
    };

    this.foodElement = null; //making foodElement PUBLIC with this so we can access it in Gameboard
    var self = this; //scope issue

    function init() { //function to create a new food element (randomly)

        position = {
            "x": parseInt(window.innerWidth * Math.random()),
            "y": parseInt(window.innerHeight * Math.random())
        }; //has to be parseInt for CSS

        if(position.x < 100){
            position.x = 100;
        }

        if(position.x > window.innerWidth - 100){
            position.x = window.innerWidth - 100;
        }

        if(position.y < 100){
            position.y = 100;
        }

        if(position.y > window.innerHeight - 100){
            position.y = window.innerHeight - 100;
        }

        var gameBoard = document.getElementById("gameboard");

        self.foodElement = document.createElement('div');
        self.foodElement.classList.add("foodPart");
        self.foodElement.style.top = position.y + "px";
        self.foodElement.style.left = position.x + "px";

        console.log(position);

        gameBoard.appendChild(self.foodElement);
    }
    init();
}


