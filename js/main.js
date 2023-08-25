const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(document).ready(function ($) {
  /*modal*/
  $(".open-modal").click(function () {
    $("body").addClass("open-modal");
  });
  $(".modal__close").click(function () {
    $("body").removeClass("open-modal");
  });

  /*menu*/
  $(".hamburger").click(function () {
    $("body").addClass("open-menu");
  });
  $(".mobile-menu__close").click(function () {
    $("body").removeClass("open-menu");
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $("body").removeClass("open-modal");
      $("body").removeClass("open-menu");
    }
  });
  /*form*/
  $(".form").submit(function () {
    const form = $(this);

    const data = form.serialize();
    $.ajax({
      type: "POST",
      url: "post.php",
      data: data,
      beforeSend: function () {
        form.find('input[type="submit"]').attr("disabled", "disabled");
      },
      success: function (data) {
        if (data === "ok") {
          form.find(".form__thanks").show();
        } else {
          alert("error");
        }
      },
    });

    return false;
  });
});
