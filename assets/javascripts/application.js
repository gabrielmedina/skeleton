// application

$(document).ready(function(){
  // active
  (function(){
    var location = window.location.pathname;
    location = location.split('/');

    var url = '';

    for (var i = 1; i < location.length; i++){
      url += '/' + location[i];
      $('a[href="'+ url +'"]').addClass('active');
    }
  })();

  // owl carousel
  (function(){
    var owl = $('.owl');

    if(owl.length){
      owl.owlCarousel();
    }
  })();

  // back history
  (function(){
    var btn = $('.btn-back');

    if(btn.length){
      btn.attr('href', 'javascript:void(0);');

      btn.click(function(){
        window.history.back(-1);
      });
    }
  })();
});
