(function ($) {
  "use strict";

  // :: Preloader Active Code
  $(window).on("load", function () {
    $(".pr-circle").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
    // $("body").delay(550).css({
    //   overflow: "visible",
    // });
  });

  // ****************************
  // :: TOP Menu Active Code
  // ****************************

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 150) {
      $(".navbar").removeClass("sticky");
      $("#back-top").fadeOut(700);
    } else {
      $(".navbar").addClass("sticky");
      $("#back-top").fadeIn(700);
    }
  });

  // Add smooth scrolling to all links
  $("a.nav-link, a.current-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var scrollTop = $(hash).offset().top - 100;
      $('html, body').animate({
        scrollTop: scrollTop
      }, 800);
    }
  });
  $(document).ready(function () {
    // AOS.init({once: true});

    $(".navbar-toggler").click(function() {
      var navbar = $(".navbar-collapse");
      if (navbar.hasClass("opened")) {
        navbar.removeClass("opened");
        $("body").removeClass("navOpened");
        $(".navbar-toggler").removeClass("toggle-clicked");
      } else {
        navbar.addClass("opened");
        $("body").addClass("navOpened");
        $(".navbar-toggler").addClass("toggle-clicked");
      }
    });
    $(".nav-link").click(function() {
      $(".navbar-toggler").click();
    })

    $('.partners-items').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000,
      arrows: true,
      nextArrow:'<a class="fa fa-angle-left fa-3x nextArrow" aria-hidden="true"><img src="assets/img/chevron-right.svg"></a>',
      prevArrow:'<a class="fa fa-angle-left fa-3x prevArrow" aria-hidden="true"><img src="assets/img/chevron-left.svg"></a>',
      responsive: [{
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }]
    });
  });
})(jQuery);