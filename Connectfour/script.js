var buttons = document.getElementsByClassName("btn");
var total = 0
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        //buttons[i].classList.add("btn-player-1");
        total = total+1;
        window.alert("this is "+ total);
    });
}
//odd number = player 1 ; even number player 2