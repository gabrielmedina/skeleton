// owl

var owl = {
  slide: function(container) {
    if(container.length){
      container.owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        stopOnHover: true,
        autoHeight : true
      });
    }
  }
}
