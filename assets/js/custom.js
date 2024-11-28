
    $('.menu-open').click(function () {
        $(".menu-open").toggleClass('opened');
        $(".body-overlay").fadeIn();
        $(".header-right").toggleClass('opened');
        // $(".menu-close").fadeIn();
        $("body").css("overflow", "hidden");
    });
    $('.body-overlay, .close-icon').click(function () {
        $(".menu-open").removeClass('opened');
        $(".body-overlay").hide();
        $(".header-right").removeClass('opened');
        $(".menu-close").hide();
        $("body").css("overflow", "inherit");
    });

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });