$(document).ready(function(){
  $(".clickable").click(function() {
    $("#hide").slideToggle("slow");
    $("#icon").slideToggle("slow");
  })
  $(".clickable1").click(function() {
    $("#hide1").fadeToggle("slow");
    $("#icon1").slideToggle("slow");
  })
  $(".clickable2").click(function() {
    $("#hide2").fadeToggle("slow");
    $("#icon2").slideToggle("slow");
})
})
