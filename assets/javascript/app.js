var timeLeft;
var totalscore = 0;
var questionCount = 0;
var runningTotal = [];
var rightAnswer;
var incorrect = 0;
var correct = 0;

var woohoo = document.createElement("audio");
        woohoo.setAttribute("src", "assets/sounds/Woohoo.mp3");

        var doh = document.createElement("audio");
        doh.setAttribute("src", "assets/sounds/Doh.mp3");
        
        var smart = document.createElement("audio");
        smart.setAttribute("src", "assets/sounds/smart.mp3");        

//countdown function
function count() {
    if (timeLeft > 0) {
        timeLeft--;
        console.log(timeLeft)
        $("#countdown").html("You have " + timeLeft + " seconds left");
    } else {
        $("#countdown").html("Times up!");
        clearInterval(count)
    }
}


//startgame
function startgame() {
    timeLeft = 15;

    setInterval(count, 1000)

}
$("#start-over").on("click",
function(){
    
     totalscore = 0;
     questionCount = 1;
     
     incorrect = 0;
     correct = 0;
     questionCount = -1;
     
     $('#score').hide()
     $('#Game').show();
     $('#start').hide();
     $("#start-over").hide()
     scrollQuestion()
     
})


function scrollQuestion() {
        $(".Game").show()
        $("#image").hide()
    if (questionCount < (currentQuestion.length - 1)) {
        
        questionCount++;
        $("#question-number").text("Question " + (questionCount + 1));
        setButtons(currentQuestion[questionCount]);
        timeLeft = 15;
    } else {
        smart.play();
        console.log("last question")
        $(".Game").hide()
        $("#image").hide()
        $("#correct-total").text("Correct: " + correct)
        $("#incorrect-total").text("Incorrect: " + incorrect)
        $("#start-over").show()
        $("#score").show()
    }
    
}




$(document).ready(function () {
    console.log("ready!");
    $("#Game").hide();
    $("#start-over").hide();
    $("#image").hide();
    



$("#start").on("click", function () {
    startgame();
    console.log("button works")
    $('#Game').show();
    $('#start').hide();
    setButtons(currentQuestion[questionCount]);

})

});


question1 = {
    trivia: "What color is a Bart's hat?",
    option1: "Blue",
    val1: false,
    option2: "Red",
    val2: true,
    option3: "Yellow",
    val3: false,
    failImage: "assets/images/bart.gif"
}

question2 = {
    trivia: "What instrument does Lisa play?",
    option1: "Tuba",
    val1: false,
    option2: "Violin",
    val2: false,
    option3: "Saxaphone",
    val3: true,
    failImage: "assets/images/lisa.gif" 
}

question3 = {
    trivia: "What talking animal did homer see in a hallucination?",
    option1: "Coyote",
    val1: true,
    option2: "Hippo",
    val2: false,
    option3: "Turtle",
    val3: false,
    failImage: "assets/images/coyote.gif" 
}

question4 = {
    trivia: "Homer unwittingly worked for what super villain?",
    option1: "Dr. No",
    val1: false,
    option2: "Hank Scorpio",
    val2: true,
    option3: "Lex Luther",
    val3: false,
    failImage: "assets/images/scorpio.gif" 
    
}

question5 = {
    trivia: "Bart took dance lessons, in what style?",
    option1: "Hip Hop",
    val1: false,
    option2: "Tap",
    val2: false,
    option3: "Ballet",
    val3: true,
    failImage: "assets/images/ballet.gif" 
    
}

question6 = {
    trivia: "What did Homer sell his soul for?",
    option1: "Duff Beer",
    val1: false,
    option2: "A Donut",
    val2: true,
    option3: "Concert Tickets",
    val3: false,
    failImage: "assets/images/doughnut.gif" 
    
}
currentQuestion = [question1, question2, question3, question4, question5, question6]



function setButtons(arr) {
    $("#label1").text(arr.option1);
    $("#q1b1").val(arr.val1);
    $("#label2").text(arr.option2);
    $("#q1b2").val(arr.val2);
    $("#label3").text(arr.option3);
    $("#q1b3").val(arr.val3);
    $("#question-text").text(arr.trivia);
    $("#fail-image").attr("src", arr.failImage);
    
}
// setButtons(currentQuestion[questionCount]);
function showImage(){
    $("#image").show()
    timeLeft = 15;
}





$(".btn").on("click",function(){
    console.log(this)
    
    //parseBoolean()   use this method below to make it a boolean instead of a string
    rightAnswer = ($(this).val());
    console.log(rightAnswer === "true");
    
    if (rightAnswer === "true"){
        woohoo.play()
        scrollQuestion();
        correct++;
    } else {
        doh.play()
        $(".Game").hide()
        $("#image").show()
        incorrect++;
        setTimeout(scrollQuestion, 5000)
    }
    
  
  
    
    
})

// $('input[type=radio]').change(function () {

