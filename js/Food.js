var Food = function() {


    var position = {
        "r": window.innerWidth / 3,
        "s": window.innerHeight / 3
    };

    var foodElement = null;
    var gameboard = document.getElementById("gameboard");
    var self = this;


    function init(){ //function to create a new food element (randomly)

        position = {
            "r": parseInt(window.innerWidth * Math.random()) ,
            "s": parseInt(window.innerHeight * Math.random())
        }; //has to be parseInt for CSS

        foodElement = document.createElement('div');
        foodElement.classList.add("foodPart");
        foodElement.style.top = position.s + "px";
        foodElement.style.left = position.r + "px";
        gameboard.appendChild(foodElement);


    }
    init();

};