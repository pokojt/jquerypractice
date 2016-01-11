$(function() {
  $(".clickable").click(function(){
    $(".bowie-normal").toggle();
    $(".bowie-stardust").toggle();
  });
});



$(function() {
  $(".ziggy").mouseenter(function() {
    $(".bowie-quote").fadeIn();
  });
});

$(function() {
  $(".ziggy").mouseleave(function() {
    $(".bowie-quote").fadeOut();
  });
});
