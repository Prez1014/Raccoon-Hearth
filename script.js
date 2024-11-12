$(document).ready(function() {
    $("#SlideToggle").click(function() {
      $("#navigation").slideToggle(500);
      $(".image-container").slideToggle(400); // Effet de réduction jusqu'à disparition
      $("footer").slideToggle(500);
    });
  });


