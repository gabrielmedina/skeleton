// owl

var _owl = {
  slide: function(container) {
    if(container.length){
      container.owlCarousel({
        margin: 0,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 600,
        autoplayTimeout: 10000,
        autoplayHoverPause: true
      });
    }
  }
}
