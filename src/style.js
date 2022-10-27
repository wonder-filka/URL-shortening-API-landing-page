$(document).ready(function () {
  $(".btn").click(function () {
    $(this).addClass("btnAterClickAll");
  });

  $(".menuMobile").click(function () {
    $(".listMobile").toggle();
  });
});
