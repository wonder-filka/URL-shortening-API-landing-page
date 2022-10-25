$(window).bind("resize", resizeWindow);
function resizeWindow(e) {
  var newWindowWidth = $(window).width();

  // Если ширина меньше 600 px, используется таблица стилей для мобильного
  if (newWindowWidth < 881) {
  } else if (newWindowWidth > 900) {
    // Если ширина больше 600 px, используется таблица стилей для десктопа
  }
}

$(document).ready(function () {
  $(".btn").click(function () {
    $(this).addClass("btnAterClick");
  });

  $(".copy").click(function () {
    $(this).text("Copied!");
  });

  $(".menuMobile").click(function () {
    $(".listMobile").toggle();
  });
});
