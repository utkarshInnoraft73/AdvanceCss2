$(document).ready(function () {
  $(".inbox").click(function () {
    $("#mailModal").toggle();
  });

  $(".cancelBtn").click(function () {
    $("#mailModal").hide();
  });
  $(".submitBtn").click(function () {
    let toPerson = $("[name=email]").val();
    let subject = $("[name=subject]").val();
    let message = $("[name=message]").val();

    alert(
      "Email to: " +
        toPerson +
        "\nSubject: " +
        subject +
        "\nMessage: " +
        message
    );
  });

  $(".all").click(function () {
    $(".item1").css({ "grid-area": "1 / 1 / span 2 / span 1" });
    $(".item5").css({ "grid-area": "2 / 3 / span 3 / span 1" });
  });
  $(".design").click(function () {
    $(".item1").css({ "grid-area": "1 / 2/ span 2 / span 1" });
  });
  $(".code").click(function () {
    $(".item5").css({ "grid-area": "2 / 1/ span 2 / span 1" });
  });
  $(".art").click(function () {
    $(".item5").css({ "grid-area": "1 / 1/ span 2 / span 1" });
  });

  $(".goToTop").click(function () {
    $(window).scrollTop(0);
  });
});
