$(document).ready(function() {
  var round = 0
  var yourScore = 0
  var compScore = 0

  $(".shoot").on("click", function() {
      var choiceRPS = ['rock', 'paper', 'scissor'];
      var ranNum = Math.floor(Math.random() * choiceRPS.length);
      var compChoice = choiceRPS[ranNum];
      var userChoice = this.id;
      round++;
      $("#round").html(round);
      var compChoice = choiceRPS[ranNum];
      console.log(compChoice);
      console.log(userChoice);

      if (compChoice == userChoice) {
        console.log("it's a tie");
      };

      if (userChoice === "rock") {
        if (compChoice === "scissor") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "paper") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };
      if (userChoice === "paper") {
        if (compChoice === "rock") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "scissor") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };
      if (userChoice === "scissor") {
        if (compChoice === "paper") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "rock") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };
  });
});
