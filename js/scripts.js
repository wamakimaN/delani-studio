$(document).ready(function(){
  $(".clickable").click(function() {
    $("#hide").slideToggle("slow");
    $("#icon").slideToggle("slow");
  })
  $(".clickable1").click(function() {
    $("#hide1").slideToggle("slow");
    $("#icon1").slideToggle("slow");
  })
  $(".clickable2").click(function() {
   $("#hide2").slideToggle("slow");
   $("#icon2").slideToggle("slow");
  })
  $(".portfolio img").hover(function() {
    $(this).animate({opacity:.5})
  }, function(){
    $(this).stop().animate({opacity:1})
  })

  $(function() {
    $("name-error").hide();
    $("mail-error").hide();
    $("message-error").hide();

    var error_name = false;
    var error_mail = false;
    var error_message = false;

  $("#name").focusout(function(){
      check_name();
    })
  $("#mail").focusout(function(){
      check_mail();
    })
  $("#message").focusout(function(){
      check_message();
    })
    function check_name()  {
      var pattern = /^[a-zA-Z]*$/;
      var name = $("#name").val();
      if(pattern.test(name) && name !== ''){
        $("#name-error").hide();
        $("#name").css("border-bottom","2px solid #34F458");
      }else {
        $("#name-error").html("Incorrect name format");
        $("#name-eror").show();
        $("#name").css("border-bottom","2px solid #F90A0A");
        error_name = true;
      }
    }
  
})
})
