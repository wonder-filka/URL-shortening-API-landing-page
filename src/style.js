$(document).ready(function () {
  $(".btn").click(function () {
    $(this).addClass("btnAterClick");
  });

  $(".copy").click(function () {
    $(this).text("Copied!");
  });
});
