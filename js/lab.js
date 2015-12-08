$(document).ready(function() {
    var round = 0

    $("#rock", "#paper", "#scissor").on("click", function(){
        var userChoice = $(this).data("choice");
    })

    $(".shoot").on("click", function() {
        var choiceRPS = ['rock','paper','scissors'];
        var ranNum = Math.floor(Math.random() * choiceRPS.length); 
        round ++;
        $("#round").html(round);
        var compChoice = choiceRPS[ranNum];
        console.log(compChoice);
    });



});