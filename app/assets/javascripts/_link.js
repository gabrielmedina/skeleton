// link

var _link = {
  back: function(link) {
    if(link.length) {
      link.click(function(e) {
        e.preventDefault();
        window.history.back(-1);
      });
    }
  },

  current: function(modifier) {
    var path = window.location.pathname.split('/');
    var url = '';

    for (var i = 1; i < path.length; i++) {
      url += '/' + path[i];

      $('a[href="'+ url +'"]').addClass(modifier);
    }
  },

  prevent: function(link) {
    if(link.length) {
      link.click(function(e) {
        e.preventDefault();
      });
    }
  }
}

$(function(){
  _link.back(
    $('.link--back')
  );

  _link.current(
    'link--current'
  );

  _link.prevent(
    $('.link--prevent')
  );
});
