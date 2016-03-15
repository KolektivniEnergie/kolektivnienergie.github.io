// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Scroll to plugin
(function(win, $) {
    $.fn.scrollTo = function( target, options, callback ){
      if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
      var settings = $.extend({
        scrollTarget  : target,
        offsetTop     : 50,
        duration      : 500,
        easing        : 'swing'
      }, options);
      return this.each(function(){
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top - parseInt(settings.offsetTop);
        scrollY = scrollY < 0 ? 0 : scrollY;
        scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
          if (typeof callback == 'function') { callback.call(this); }
        });
      });
    }
}(window, $));


// Change hash without scrolling
(function(win, doc, $) {
    $.fn.changeHashWithoutScrolling = function(hash){
        if(hash.indexOf("#") < 0) return;

        var id = hash.replace(/^.*#/, '')
            $el = $(doc.getElementById(id));

        if($el.length > 0) {
            console.log(hash, id, $el);
            $el.removeAttr('id');
            win.location.hash = hash;
            $el.attr('id', id);
        } else {
            win.location.hash = hash;
        }
    }
}(window, document, $));