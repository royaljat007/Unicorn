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
});
// Contact Toggle
$(".contact-model-btn").click(function () {
  $(".contact-main").toggleClass("hidden");
});
