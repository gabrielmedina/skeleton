// nav

var nav = {
  open: function(container, links, btn, modifier) {
    $(container).removeClass(modifier);

    btn.on('click', function(e) {
      e.preventDefault();
      container.toggleClass(modifier);
    });
  }
}
