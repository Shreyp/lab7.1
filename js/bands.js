$(document).ready(function() {

    $("#bandBtn").on("click", function(){
      bandMe();
    });

    function bandMe(){
      var bands = ['foo fighters', 'sublime', 'guns \'n roses', 'korn', 'bon jovi', 'shop boyz'];
      var ranNum = Math.floor(Math.random() * bands.length); 
      $('#content').html(bands[ranNum]);
    }

});