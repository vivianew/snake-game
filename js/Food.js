var Food = function() {

    var position = {
        "r": window.innerWidth / 3,
        "s": window.innerHeight / 3
    };

    this.foodElement = null; //making foodElement PUBLIC with this so we can access it in Gameboard
    var B = document.getElementById("B");
    var self = this; //scope issue

function edgeDetection(){
    if(position.s > window.innerHeight){
        self.foodElement.remove();
        return true;
    }
        return false;
}



    function init(){ //function to create a new food element (randomly)

        position = {
            "r": parseInt(window.innerWidth * Math.random()) ,
            "s": parseInt(window.innerHeight * Math.random())
        }; //has to be parseInt for CSS


        self.foodElement = document.createElement('div');
        self.foodElement.classList.add("foodPart");
        self.foodElement.style.top = position.s + "px";
        self.foodElement.style.left = position.r + "px";
        B.appendChild(self.foodElement);
    }
         init();
         edgeDetection();


 };   


