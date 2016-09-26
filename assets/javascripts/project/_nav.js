// nav

var _nav = {
  open: function(container, nav, links, btn, modifier) {
    $(container).removeClass(modifier);

    btn.on('click', function(e) {
      e.preventDefault();
      container.toggleClass(modifier);
    });

    nav.on('click', function(e) {
      if(e.target != this) return;
      container.removeClass(modifier);
    });
  }
}
