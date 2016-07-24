// application

$(function(){
  // link
  link.back(
    $('.link--back')
  );

  link.current(
    'link--current'
  );

  link.prevent(
    $('.link--prevent')
  );

  // owl
  owl.slide(
    $('.slide')
  );

  // nav
  nav.open(
    $('html'),
    $('.nav'),
    $('.nav__link'),
    $('.nav__btn'),
    'nav--opened'
  );
});
