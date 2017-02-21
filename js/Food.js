/**
 * Created by jens on 20/2/2017.
 */

var Food = function() {
	
	var position = {
		"r": window.innerWidth / 3,
		"s": window.innerHeight / 3
	};


this.foodPart = null;
var gameboard = document.getElementById("gameboard");
var self = this; 

}

//Create a food part
	//random appearance
var createFood = function() {
	var position = {
		"r": window.innerWidth * Math.random() ,
		"s": window.innerHeight * Math.random()
	};

	var food_r = position.r;
	var food_s = position.s;

	
	if (position.s <= 10) {
		position.s = 10;
	}
	if (position.s >= (window.innerHeight-10)) {
		position.s = window.innerHeight-10;
	}

	if (position.r >= 10) {
		position.r = 10;
	}
	if (position.r >= (window.innerWidth-10)){
		position.r = window.innerWidth-10;
	} 



	var foodPart = document.createElement('div');
	foodPart.classList.add("foodPart");
	foodPart.style.top = food_s + "px";
	foodPart.style.left = food_r + "px";
	gameboard.appendChild(foodPart);
 
console.log("createFood");

debugger;

}

createFood();
