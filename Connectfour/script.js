var buttons = document.getElementsByClassName("btn");
var total = 0

// Single image URL
var image = ["Token 1.gif","Token 2.gif"]; // Set a default image URL
var innertext = "player "
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        //buttons[i].classList.add("btn-player-1");
        
        
        var buttonClass = this.className; // `this` refers to the clicked button
        var number = buttonClass.match(/btn-(\d+)/)[1]; // Extracts the number using regex
        var displayImage = this.querySelector("img");
            displayImage.src = image[total %2]
            displayImage.style.display = 'block'; // Show the image
        
        //window.alert("You pressed " + number + ". Total clicks: " + total);
        total = total+1;
        document.querySelector("#title h1").innerText = innertext +(total %2 +1);
    });
}
//odd number = player 1 ; even number player 2

//if 4 of the same image are together in one direction, the player of the turn wins.
//at the end of each player's turn, scan will be made for the position of each images
//for the same, it would be in any directions within a straight line such as right, left, up, down and diagonally.
//[[][]]

//pseudo code
/*
def Victory():
    if 4 of token 1 are aligned:
        Print(Victory)
    elif 4 of token 2 are aligned:
        Print(Victory for player 2)

def alignement:
    check right
        check cases+1
    check right up to left down
        check cases +8
    check left up to right down
        check cases + 6
    check down
        check cases +7
code


*/



//Errors to correct: Make sure that the buttons already pressed and now with images on them cannot be pressed by both players.