$(document).ready(function() {
  var round = 0
  var yourScore = 0
  var compScore = 0

  $(".shoot").on("click", function() {
      var choiceRPS = ['rock', 'paper', 'scissor','lizard','spock'];
      var ranNum = Math.floor(Math.random() * choiceRPS.length);
      var compChoice = choiceRPS[ranNum];
      var userChoice = this.id;
      round++;
      $("#round").html(round);
      var compChoice = choiceRPS[ranNum];
      console.log(userChoice);
      console.log(compChoice);
      console.log(round);

      if (compChoice == userChoice) {
        console.log("it's a tie");
      };

      if (userChoice === "rock") {
        if (compChoice === "lizard" || compChoice === "scissor") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "paper" || compChoice === "spock") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };
      if (userChoice === "paper") {
        if (compChoice === "rock" || compChoice === "spock") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "scissor" || compChoice === "lizard") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };
      if (userChoice === "scissor") {
        if (compChoice === "paper" || compChoice === "lizard") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "rock" || compChoice === "spock") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };      
      if (userChoice === "lizard") {
        if (compChoice === "spock" || compChoice === "paper") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "rock" || compChoice === "scissor") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };      
      if (userChoice === "spock") {
        if (compChoice === "rock" || compChoice === "scissor") {
          yourScore++;
          $("#yourScore").html(yourScore);
        } else {
          if (compChoice === "lizard" || compChoice === "paper") {
            compScore++;
            $("#computerScore").html(compScore);
          }
        }
      };
      if (round === 5) {
        round -=5;
        if (yourScore>compScore) {
          $('#win').modal({
            keyboard: false
          });
        } else if (yourScore<compScore) {
          $('#lose').modal({
            keyboard: false
          });
        } else if (yourScore==compScore) {
            $('#tie').modal({
            keyboard: false
        });
      };
  };
});
});