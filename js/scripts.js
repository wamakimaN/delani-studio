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
  $("#col_1").hover(function() {
    $("#work1").fadeTo("slow", 0.6);
    $("#proj1").fadeTo("slow", 1);
  }, function() {
    $("#work1").fadeTo("slow", 1);
    $("#proj1").fadeTo("slow", 0);
  });
  $("#col_2").hover(function() {
    $("#work2").fadeTo("slow", 0.6);
    $("#proj2").fadeTo("slow", 1);
  }, function() {
    $("#work2").fadeTo("slow", 1);
    $("#proj2").fadeTo("slow", 0);
  });
  $("#col_3").hover(function() {
    $("#work3").fadeTo("slow", 0.6);
    $("#proj3").fadeTo("slow", 1);
  }, function() {
    $("#img_3").fadeTo("slow", 1);
    $("#proj3").fadeTo("slow", 0);
  });
  $("#col_4").hover(function() {
    $("#work4").fadeTo("slow", 0.6);
    $("#proj4").fadeTo("slow", 1);
  }, function() {
    $("#work4").fadeTo("slow", 1);
    $("#proj4").fadeTo("slow", 0);
  });
  $("#col_5").hover(function() {
    $("#work5").fadeTo("slow", 0.6);
    $("#proj5").fadeTo("slow", 1);
  }, function() {
    $("#work5").fadeTo("slow", 1);
    $("#proj5").fadeTo("slow", 0);
  });
  $("#col_6").hover(function() {
    $("#work6").fadeTo("slow", 0.6);
    $("#proj6").fadeTo("slow", 1);
  }, function() {
    $("#work6").fadeTo("slow", 1);
    $("#proj6").fadeTo("slow", 0);
  });
  $("#col_7").hover(function() {
    $("#work7").fadeTo("slow", 0.6);
    $("#proj7").fadeTo("slow", 1);
  }, function() {
    $("#work7").fadeTo("slow", 1);
    $("#proj7").fadeTo("slow", 0);
  });
  $("#col_8").hover(function() {
    $("#work8").fadeTo("slow", 0.6);
    $("#proj8").fadeTo("slow", 1);
  }, function() {
    $("#work8").fadeTo("slow", 1);
    $("#proj8").fadeTo("slow", 0);
  });

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
    function check_mail()  {
      var pattern = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
      var mail = $("#mail").val();
      if(pattern.test(mail) && mail !== ''){
        $("#mail-error").hide();
        $("#mail").css("border-bottom","2px solid #34F458");
      }else {
        $("#mail-error").html("Incorrect e-mail format");
        $("#mail-eror").show();
        $("#mail").css("border-bottom","2px solid #F90A0A");
        error_mail = true;
      }
    }
    })
    $("#contacts").submit(function(event) {
    event.preventDefault();
    var blanks = ["name", "mail", "message"];
    var input = [];
    blanks.forEach(function(blank) {
      input.push($("#" + blank).val());
    });
    alert("Thank You " + input[0] + " for reaching out to us. We have received your message");
    $("#contacts")[0].reset();
    })
})
