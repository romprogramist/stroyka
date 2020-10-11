$(function () {
  $(".request_form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(".request_text").fadeIn("slow");
      $(".request_form").trigger("reset");
    });
    return false;
  });

  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".mobile_nav").toggleClass("menu_hide");
  });

  $(".mobile_nav a").click(function () {
    $(".mobile_nav").toggleClass("menu_hide");
    $(".hamburger").toggleClass("active");
  });
});
