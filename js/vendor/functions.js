/*
  Functions
*/

// Active
function active(){
  var url = $(location).attr('href').split('/').pop();

  if (url == ''){
    $('.nav-index').addClass('active');
  } else {
    $('.nav a').each(function(){
      var link = $(this).attr('href');

      if(link == url){
        $(this).addClass('active');
      }
    });
  }
}

// First Last
function first_last(elements){
  var elements = $('.first-last ' + elements);

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
}

// Even Odd
function even_odd(elements){
  var elements = $('.even-odd ' + elements);

  elements.each(function(i){
    if((i % 2) == 0){
      $(this).addClass('odd');
    } else {
      $(this).addClass('even');
    }
  });
}

// Page Up
function page_up(){
  var page_up = $('#page_up');

  page_up.attr('href', 'javascript:void();');

  page_up.on('click', function(){
    $('html, body').stop().animate({ scrollTop: 0 }, 400 )
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      page_up.fadeIn();
    } else {
      page_up.fadeOut();
    }
  });
}

// Page Back
function page_back(){
  var page_back = $('.page_back');
  
  if(page_back.length){
    page_back
      .attr('href', 'javascript:void();')
      .on('click', function(){ 
        history.go(-1); 
      });
  }
}