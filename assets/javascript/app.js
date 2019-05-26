var timeLeft;
var totalscore = 0
var scoreQ1 = 0 

function count (){
    if ( timeLeft > 0){
    timeLeft--;
    console.log(timeLeft)
    $("#countdown").html("You have " + timeLeft + " seconds left");
    } else {
        $("#countdown").html("Times up!");
        clearInterval(count)
    }
}



function startgame (){
    timeLeft = 15;
    
    setInterval(count, 1000)
}







$("#start").on("click", function(){
    startgame();
    console.log("button works")
    
})

console.log(scoreQ1)

$("#q1b2").on("click", function (){
    if (scoreQ1 < 1){
    scoreQ1++;
    console.log(scoreQ1)
}
})

$("#q1b1").on("click", function (){
    if (scoreQ1 > 0){
    scoreQ1 = 0
    console.log(scoreQ1)
}
})
$("#q1b3").on("click", function (){
    if (scoreQ1 < 1){
    scoreQ1 = 0
    console.log(scoreQ1)
}
})

