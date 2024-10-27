var buttons = document.getElementsByClassName("btn");
var total = 0

// Single image URL
var image = "Token 1.gif"; // Set a default image URL

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        //buttons[i].classList.add("btn-player-1");
        total = total+1;
        var buttonClass = this.className; // `this` refers to the clicked button
        var number = buttonClass.match(/btn-(\d+)/)[1]; // Extracts the number using regex
        var displayImage = this.querySelector("img");
            displayImage.src = image
            displayImage.style.display = 'block'; // Show the image
        
        window.alert("You pressed " + number + ". Total clicks: " + total);
    });
}
//odd number = player 1 ; even number player 2