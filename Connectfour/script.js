var buttons = document.getElementsByClassName("btn");
var total = 0
// Single image URL
var image = ["Token 1.gif","Token 2.gif"]; // Set a default image URL
var innertext = "player "
var turnGrid = [[],[]]
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var buttonClass = this.className; // `this` refers to the clicked button
        var number = buttonClass.match(/btn-(\d+)/)[1]; // Extracts the number using regex
        var displayImage = this.querySelector("img");
            displayImage.src = image[total %2]
            displayImage.style.display = 'block'; // Show the image
        
        turnGrid[total %2].push(parseInt(number));
        turnGrid[total % 2].sort((a, b) => a - b); // Sort the turnGrid for the current player
        console.log(number)
        console.log(turnGrid[total %2])
        if (winner(turnGrid[total %2]) === true){
            window.alert("You've won.");
            NewGame()
        }
        total = total+1;
        document.querySelector("#title h1").innerText = innertext +(total %2 +1);
    });
}

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/watch?v=4ACPpcGBbJs";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a YouTube player after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0', // Set height to 0 to hide the video
        width: '0',  // Set width to 0 to hide the video
        videoId: '4ACPpcGBbJs', // YouTube video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}


function winner(proof) {
    diffs = [1,6,7,8]
    const funcs = [
        (a) => (a - 1) % 7 > 3,
        (a) => (a - 1) % 7 < 3,
        (_) => false,
        (a) => (a - 1) % 7 > 3
    ];

    for (var j of proof) {
        for (var index = 0; index < funcs.length; index++) {
            var increment = diffs[index];       
            if (funcs[index](j) === false && 
                proof.includes(j+(increment*1)) && 
                proof.includes(j+(increment*2)) && 
                proof.includes(j+(increment*3))){
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