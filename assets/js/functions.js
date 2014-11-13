// functions

// active
(function(){
  var location = window.location.pathname;
  location = location.split('/');

  $('a[href="/'+ location[1] +'"]').addClass('active');
});


// up
(function(){
  var up = $('.up');

  up
  .attr('href', 'javascript:void();')
  .on('click', function(){
    $('html, body')
    .stop()
    .animate({
      scrollTop: 0
    },400);
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      up.fadeIn();
    } else {
      up.fadeOut();
    }
  });
});


// back
(function(){
  var back = $('.back');

  back.each(function(){
    $(this)
    .attr('href', 'javascript:void();')
    .on('click', function(){
      history.go(-1);
    });
  });
});
