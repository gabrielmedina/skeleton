/*
  Functions
*/

// Active
function active(){
  var url = $(location).attr('href').split('/').pop();

  if (url == ''){
    $('.nav-active a[href="./"]').addClass('active');
  } else {
    $('nav-active a').each(function(){
      var link = $(this).attr('href');

      if(link == url){
        $(this).addClass('active');
      }
    })
  }
}

// Up
function up(){
  var up = $('#up');

  up.attr('href', 'javascript:void();');

  up.on('click', function(){
    $('html, body').stop().animate({ scrollTop: 0 }, 400 )
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      up.fadeIn();
    } else {
      up.fadeOut();
    }
  });
}

// Back
function go_back(){
  var go_back = $('.go-back');
  
  if(go_back.length){
    go_back
      .attr('href', 'javascript:void();')
      .on('click', function(){ 
        history.go(-1); 
      });
  }
}