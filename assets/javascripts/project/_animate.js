// animate

var _animate = {
  onScroll: function(target, modifier, remove) {
    windowHeight = $(window).height(),
    offset = windowHeight - (windowHeight / 4);

    function animeScroll() {
      var documentTop = $(document).scrollTop();

      target.each(function() {
        if (documentTop > $(this).offset().top - offset) {
          $(this).addClass(modifier);
        } else {
          if(remove) {
            $(this).removeClass(modifier);
          }
        }
      });
    }

    animeScroll();

    $(document).scroll(function() {
      setTimeout(function() {
        animeScroll()
      }, 150);
    });
  }
};
