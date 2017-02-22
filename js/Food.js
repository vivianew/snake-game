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


    function init(){

        position = {
            "r": parseInt(window.innerWidth * Math.random()) ,
            "s": parseInt(window.innerHeight * Math.random())
        };

        self.foodElement = document.createElement('div');
        self.foodElement.classList.add("foodPart");
        self.foodElement.style.top = position.s + "px";
        self.foodElement.style.left = position.r + "px";
        gameboard.appendChild(self.foodElement);
    }
    init();
};