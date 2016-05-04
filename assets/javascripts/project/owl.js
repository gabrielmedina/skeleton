// owl

var owl = {
  slide: function(container) {
    if(container.length){
      container.owlCarousel({
        autoPlay: 7000,
        singleItem: true,
        stopOnHover: true,
        slideSpeed: 500,
        paginationSpeed: 500,
        rewindSpeed: 1000,
        navigation: true,
        navigationText: ['&lsaquo;','&rsaquo;']
      });
    }
  }
}
