var buttons = document.getElementsByClassName("btn");
var total = 0
// Single image URL
var image = ["Token 1.gif","Token 2.gif"]; // Set a default image URL
var innertext = "player "
var turnGrid = [[],[]]
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        //buttons[i].classList.add("btn-player-1");
        
        
        var buttonClass = this.className; // `this` refers to the clicked button
        var number = buttonClass.match(/btn-(\d+)/)[1]; // Extracts the number using regex
        var displayImage = this.querySelector("img");
            displayImage.src = image[total %2]
            displayImage.style.display = 'block'; // Show the image
        
        turnGrid[total %2].push(parseInt(number));
        turnGrid[total % 2].sort((a, b) => a - b); // Sort the turnGrid for the current player
        console.log(number)
        console.log(turnGrid[total %2])
        //window.alert("You pressed " + number + ". Total clicks: " + total);
        if (winner(turnGrid[total %2]) === true){
            //console.log("you've won")
            window.alert("You've won.");
            NewGame()
        }
        total = total+1;
        document.querySelector("#title h1").innerText = innertext +(total %2 +1);
    });
}

function check(accumulation, increment, edgeDetect) {
    /*if (accumulation.length === 1 && edgeDetect(accumulation[accumulation.length - 1])) {*/
    if (accumulation.length === 1 && edgeDetect(accumulation[0])) {    
        accumulation = [];
    }

    if (accumulation.length > 1 && accumulation[accumulation.length - 1] !== accumulation[accumulation.length - 2] + increment) {
        accumulation = [accumulation[accumulation.length - 1]];
    }

    return accumulation;
}

function winner(proof) {
    /*var accumulations = {
        1: [],
        6: [],
        7: [],
        8: []
    };*/
    diffs = [1,6,7,8]
    const funcs = [
        (a) => (a - 1) % 7 > 3,
        (a) => (a - 1) % 7 < 3,
        (_) => false,
        (a) => (a - 1) % 7 > 3
    ];
    //list of stuff to change:   
    /*for (let j of proof) {
        for (let index =0; index<funcs.length;index++){
            index_2 = diffs[index]
            increment = index_2*/
    for (var j of proof) {
        for (var index = 0; index < diffs.length; index++) {
            var increment = diffs[index];       
        'for (let [increment,value] of Object.entries(accumulations)) {'
            /*accumulations[increment].push(j);
            accumulations[increment] = check(accumulations[increment], parseInt(increment), funcs[index]);
            if (accumulations[increment].length === 4) {
                return true;
            }*/
            /*for (let k in multiplicators = [1,2,3]){
              if (proof.includes(j+(index*k))){
                console.log("Value exists in the array");
              }*/

            //funcs[index](j)//
            if (proof.includes(j+(increment*1)) && proof.includes(j+(increment*2)) && proof.includes(j+(increment*3))){
                return true;
            }
        }
    }
    return false;
}

function NewGame(){
//TurnGrid and DisplayImage will need to be resetted.
 // Reset the turn grid
turnGrid = [[],[]]
 // Clear all images
for (var i = 0; i < buttons.length; i++) {
    var displayImage = buttons[i].querySelector("img");
    displayImage.src = "";
    displayImage.style.display = 'none'; // Hide the image
}

// Reset other game state variables
total = 0;

}

//odd number = player 1 ; even number player 2
//if 4 of the same image are together in one direction, the player of the turn wins.
//at the end of each player's turn, scan will be made for the position of each images
//for the same, it would be in any directions within a straight line such as right, left, up, down and diagonally.
//[[][]]