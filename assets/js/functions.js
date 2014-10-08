// functions

// active
var active = function(base){
  var url = $(location).attr('href').replace(base, '');

  if(url == ''){
    $('a[href="/"]').addClass('active');
  } else {
    $('a[href="'+ url[0] + '"').addClass('active');
  }
};

// first and last
var first_last = function(elements){
  var elements = $(elements);

  elements.each(function(i){
    switch(i){
      case 0:
        $(this).addClass('first');
        break;
      case elements.length - 1:
        $(this).addClass('last');
        break;
    }
  });
};

// even and odd
var even_odd = function(elements){
  $(elements).each(function(index){
    if((index % 2) == 0){
      $(this).addClass('odd');
    } else {
      $(this).addClass('even');
    }
  });
};

// up
var up = function(){
  var up = $('#up');

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
};

// go back
var goback = function(){
  var goback = $('.goback');

  goback.each(function(){
    $(this)
    .attr('href', 'javascript:void();')
    .on('click', function(){
      history.go(-1);
    });
  });
};
