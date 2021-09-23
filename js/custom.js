$(document).ready(function () {
  $(".our-result-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".audit-s-stroy-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".who-help-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".why-us-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
  $(".brands-logo-carousel").owlCarousel({
    loop: false,
    margin: 22,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1.5,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});
// Contact Toggle
$(".contact-model-btn").click(function () {
  $(".contact-main").toggleClass("hidden");
});

// Body overflow

$(".navbar-toggler").click(function () {
  $("body").toggleClass("overflow-hidden");
});

//Toggle on hover

if ($(window).width() >= 1024) {
  $("#navbarDropdown").hover(function () {
    $(".hoverDropdown").toggleClass("show");
  });
  $(".hoverDropdown").hover(function () {
    $(".hoverDropdown").toggleClass("show");
  });
}
