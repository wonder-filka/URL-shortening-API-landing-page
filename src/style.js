$(document).ready(function () {
  $(".btn").click(function () {
    $(this).addClass("btnAterClick");
  });

  $(".menuMobile").click(function () {
    $(".listMobile").toggle();
  });
});
