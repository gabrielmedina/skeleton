/*
  Functions
*/

// Active
function nav_active(){
  var url = $(location).attr('href').split('/').pop();

  if (url == ''){
    $('.nav-index').addClass('active');
  } else {
    $('.nav-active a').each(function(){
      var link = $(this).attr('href');

      if(link == url){
        $(this).addClass('active');
      }
    });
  }
}

// Up
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

// Back
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