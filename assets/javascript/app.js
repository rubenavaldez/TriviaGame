var timeLeft;
var totalscore = 0;
var scoreQ1 = 0;
var questionCount = 0;
var runningTotal = [];


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
    if (questionCount < (currentQuestion.length - 1)) {
        questionCount++;
        $("#question-number").text("Question " + (questionCount + 1));
    } else {
        console.log("last question")
    }

}
//*****enable when finished */
// $('#Game').hide();




$("#start").on("click", function () {
    startgame();
    console.log("button works")
    $('#Game').show();
    $('#start').hide();


})

console.log(scoreQ1)


question1 = {
    trivia: "What color is a fire truck?",
    option1: "Blue",
    val1: 0,
    option2: "Red",
    val2: 1,
    option3: "Yellow",
    val3: 0
}

question2 = {
    trivia: "What color is a banana?",
    option1: "Blue",
    val1: 0,
    option2: "Red",
    val2: 0,
    option3: "Yellow",
    val3: 1
}

currentQuestion = [question1, question2]



function setButtons(arr) {
    $("#label1").text(arr.option1);
    $("#q1b1").val(arr.val1);
    $("#label2").text(arr.option2);
    $("#q1b2").val(arr.val2);
    $("#label3").text(arr.option3);
    $("#q1b3").val(arr.val3);
    $("#question-text").text(arr.trivia);

}
setButtons(currentQuestion[questionCount]);

function checkScore() {

}



$('input[type=radio]').change(function () {
    console.log(this)

    var rightAnswer = parseInt($("input[type='radio'][name='options']:checked").val());
    console.log(rightAnswer)
    runningTotal.push(rightAnswer)
    console.log(runningTotal)
    $("input[type='radio'][name='options']:checked").attr('checked', false);

    scrollQuestion();
    
    setButtons(currentQuestion[questionCount]);
    



});

$(document).ready(function () {
    console.log("ready!");

    $("#image").hide();
});
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



