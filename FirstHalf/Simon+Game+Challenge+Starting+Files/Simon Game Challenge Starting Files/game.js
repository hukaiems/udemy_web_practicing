var userClickedPattern = [];
var gamePattern = [];
var level = 0
var flag = false;
var buttonColours = ["red", "blue", "green", "yellow"];

$(document).on('keydown', function(){
    if (flag === false){
        flag = true;
        $("h1").text("Level " + level);
        nextSequence();
    }
});


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var audio = new Audio('./sounds/' + randomChosenColour + '.mp3');
    $("#" + randomChosenColour).fadeOut();
    $("#" + randomChosenColour).fadeIn();
    audio.play();
    level ++;
    $("h1").text("Level " + level);
}

// so it basically use a handler function to handle all the click on the class .btn
$(".btn").on("click", function(event){
    var userChosenColour = event.currentTarget.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        console.log(userClickedPattern);
        console.log(gamePattern);
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    }
    else {
        console.log("wrong");
        var audioWrong = new Audio("sounds/wrong.mp3");
        audioWrong.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    flag = false;
}

function playSound(name){
    var audio2 = new Audio('./sounds/' + name + '.mp3');
    audio2.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}











