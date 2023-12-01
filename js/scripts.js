$(document).ready(function () {
  $("button#green").click(function () {
    $("body").removeClass();
    $("body").addClass("Flashcard-Site-background");
  });

  // $("#js-hidden").click(function () {
  //   $("p").removeClass();
  //   $("p").addClass("border-background");

  // });

  $(".click").click(function () {
    $("#js-showing").toggle();
    $("#js-hidden").toggle();
  });

  $(".click-2").click(function () {
    $("#operation-showing").toggle();
    $("#operation-hidden").toggle();
  });

  $(".click-3").click(function () {
    $("#variable-showing").toggle();
    $("#variable-hidden").toggle();
  });

  $(".click-11").click(function () {
    $("#Variable-naming-conventions-showing").toggle();
    $("#Variable-naming-conventions-hidden").toggle();
  });

  

  $(".click-4").click(function () {
    $("#function-showing").toggle();
    $("#function-hidden").toggle();
  });

  $(".click-5").click(function () {
    $("#method-showing").toggle();
    $("#method-hidden").toggle();
  });

  $(".click-6").click(function () {
    $("#argument-showing").toggle();
    $("#argument-hidden").toggle();
  });

  $(".click-7").click(function () {
    $("#parameter-showing").toggle();
    $("#parameter-hidden").toggle();
  });

  $(".click-8").click(function () {
    $("#return-showing").toggle();
    $("#return-hidden").toggle();
  });
  
  $(".click-9").click(function () {
    $("#Chaining-methods-showing").toggle();
    $("#Chaining-methods-hidden").toggle();
  });

  $(".click-00").click(function () {
    $("#strings-showing").toggle();
    $("#strings-hidden").toggle();
  });

  $(".click-01").click(function () {
    $("#Booleans-showing").toggle();
    $("#Booleans-hidden").toggle();
  });
  $(".click-03").click(function () {
    $("#Undefined-showing").toggle();
    $("#Undefined-hidden").toggle();
  });
  $(".click-04").click(function () {
    $("#nan-showing").toggle();
    $("#nan-hidden").toggle();
  });

  $(".click-05").click(function () {
    $("#null-showing").toggle();
    $("#null-hidden").toggle();
  });

  $(".click-06").click(function () {
    $("#alert-showing").toggle();
    $("#alert-hidden").toggle();
  });
  $(".click-07").click(function () {
    $("#comment-showing").toggle();
    $("#comment-hidden").toggle();
  });

  $(".click-08").click(function () {
    $("#jquery-showing").toggle();
    $("#jquery-hidden").toggle();
  });
  $(".click-09").click(function () {
    $("#attributes-showing").toggle();
    $("#attributes-hidden").toggle();
  });


});