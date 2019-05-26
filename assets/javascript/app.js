var timeLeft;


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



