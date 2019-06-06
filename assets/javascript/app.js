var timeLeft;
var totalscore = 0;
var questionCount = 0;
var runningTotal = [];
var rightAnswer;


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

function scrollQuestion() {
        $(".Game").show()
        $("#image").hide()
    if (questionCount < (currentQuestion.length - 1)) {
        
        questionCount++;
        $("#question-number").text("Question " + (questionCount + 1));
        setButtons(currentQuestion[questionCount]);
        timeLeft = 15;
    } else {
        console.log("last question")
    }
    
}
//*****enable when finished */



$(document).ready(function () {
    console.log("ready!");
    $("#Game").hide();
   
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
    trivia: "What color is a fire truck?",
    option1: "Blue",
    val1: false,
    option2: "Red",
    val2: true,
    option3: "Yellow",
    val3: false
}

question2 = {
    trivia: "What color is a banana?",
    option1: "Blue",
    val1: false,
    option2: "Red",
    val2: false,
    option3: "Yellow",
    val3: true,
    failImage: "assets/images/wronganswer.gif" 
}

question3 = {
    trivia: "What color is the sky?",
    option1: "Blue",
    val1: true,
    option2: "Red",
    val2: false,
    option3: "Yellow",
    val3: false,
    failImage: "assets/images/wronganswer.gif" 
}

question4 = {
    trivia: "What color is grass?",
    option1: "Green",
    val1: true,
    option2: "Orange",
    val2: false,
    option3: "Purple",
    val3: false,
    failImage: "assets/images/wronganswer.gif" 
    
}

question5 = {
    trivia: "What does John Snow know?",
    option1: "Nothing",
    val1: true,
    option2: "Something",
    val2: false,
    option3: "Anything",
    val3: false,
    failImage: "assets/images/johnsnow.gif" 
    
}
currentQuestion = [question1, question2, question3, question4, question5]



function setButtons(arr) {
    $("#label1").text(arr.option1);
    $("#q1b1").val(arr.val1);
    $("#label2").text(arr.option2);
    $("#q1b2").val(arr.val2);
    $("#label3").text(arr.option3);
    $("#q1b3").val(arr.val3);
    $("#question-text").text(arr.trivia);
    $("#fail-image").attr("src", arr.failImage);
    console.log(arr.failImage)
}
// setButtons(currentQuestion[questionCount]);
function showImage(){
    $("#image").show()
    timeLeft = 15;
}


function checkScore() {
    
    //   } else {  
    //   alert("wrong")
    //   $('#Game').hide();
    //   setTimeout( showImage, 3000)
    //   scrollQuestion();

}

$(".btn").on("click",function(){
    console.log(this)
    
    //parseBoolean()   use this methos below to make it a boolean instead of a string
    rightAnswer = ($(this).val());
    console.log(rightAnswer === "true");
    
    if (rightAnswer === "true"){
        scrollQuestion();
    
    } else {
        $(".Game").hide()
        $("#image").show()
        
        setTimeout(scrollQuestion, 5000)
    }
    
    // console.log(rightAnswer)
    // runningTotal.push(rightAnswer)
    // console.log(runningTotal)
    
    
    // if(rightAnswer == true){
    //    console.log("you are right")
    // }
        // scrollQuestion(); 

    
    
    
})

// $('input[type=radio]').change(function () {
//     console.log(this)

//     var rightAnswer = parseInt($("input[type='radio'][name='options']:checked").val());
//     console.log(rightAnswer)
//     runningTotal.push(rightAnswer)
//     console.log(runningTotal)
    

//     scrollQuestion();
    
//     setButtons(currentQuestion[questionCount]);
    



// });


// $("#q1b1").on("change", function (){
//     if (scoreQ1 > 0){
//     scoreQ1 = 0
//     console.log(scoreQ1)
//     console.log('it')
// }
// })

// $("#q1b2").button("click", function (){
//     if (scoreQ1 < 1){
//     scoreQ1++;
//     console.log(scoreQ1)
// }
// })

// $("#q1b3").on("click", function (){
//     if (scoreQ1 < 1){
//     scoreQ1 = 0
//     console.log(scoreQ1)
// }
// })



