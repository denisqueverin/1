$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 0,
      loop: false,
      nav: true,
      navText: ["<img class='arrow-width' src='vector.png'>", "<img class='arrow-width' src='vector1.png'>"],
     
      responsive: {
        0: {
          autoplay: true
        },
        601: {
          autoplay: false
        }
      }

    });
  });
