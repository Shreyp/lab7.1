$(document).ready(function(){
    var rounds = 0;
    var yourWins = 0;
    var computerWins = 0;

    $('#rounds').html(rounds);
    $('#yourWins').html(yourWins);
    $('#computerWins').html(computerWins);

    $('#roundUp').on('click', function(){
        rounds++;
        $('#rounds').html(rounds);
    });

    $('#yourWinsUp').on('click', function(){
        yourWins++;
        $('#yourWins').html(yourWins);
    });

    $('#computerWinsUp').on('click', function(){
        computerWins++;
        $('#computerWins').html(computerWins);
    });

    $("#everythingGoesDown").on('click', function(){
      rounds--;
      yourWins--;
      computerWins--;
      $('#rounds').html(rounds);
      $('#yourWins').html(yourWins);
      $('#computerWins').html(computerWins);
    })
});