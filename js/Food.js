/**
 * Created by jens on 20/2/2017.
 */

var Food = function() {

    var position = {
        "r": window.innerWidth / 3,
        "s": window.innerHeight / 3
    };

    this.foodElement = null;
    var gameboard = document.getElementById("gameboard");
    var self = this;


    function init(){ //function to create a new food element (randomly)

        position = {
            "r": parseInt(window.innerWidth * Math.random()) ,
            "s": parseInt(window.innerHeight * Math.random())
        }; //has to be parseInt for CSS

<<<<<<< HEAD
        foodElement = document.createElement('div');
        foodElement.classList.add("foodPart");
        foodElement.style.top = position.s + "px";
        foodElement.style.left = position.r + "px";
        gameboard.appendChild(foodElement);


    }
    init();

=======
        self.foodElement = document.createElement('div');
        self.foodElement.classList.add("foodPart");
        self.foodElement.style.top = position.s + "px";
        self.foodElement.style.left = position.r + "px";
        gameboard.appendChild(self.foodElement);
    }
    init();
>>>>>>> 0bee2a7e96575dd74c391847c2d223f913bcf47c
};