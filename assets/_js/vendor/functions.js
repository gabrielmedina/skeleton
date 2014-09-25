// Functions

// Active
function active(base){
  var url = $(location).attr('href').replace(base, '');

  if(url == ''){
    $('a[href="/"]').addClass('active');
  } else {
    $('a[href="'+ url[0] + '"').addClass('active');
  }
};

// First Last
function first_last(elements){
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

// Even Odd
function even_odd(elements){
  $(elements).each(function(index){
    if((index % 2) == 0){
      $(this).addClass('odd');
    } else {
      $(this).addClass('even');
    }
  });
};

// Up
function up(){
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

// Go Back
function goback(){
  var goback = $('.goback');

  goback.each(function(){
    $(this)
      .attr('href', 'javascript:void();')
      .on('click', function(){
        history.go(-1);
      });
  });
};