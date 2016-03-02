(function(win, $) {
    $(function() {
	    $('a[data-scroll]').on('click', function(e) {
	        e.stopImmediatePropagation();
	        var $el = $(this);
	        var scrollTo = $el.data('scroll');
	        $('body').scrollTo(scrollTo, {
	            duration : '1000',
	            offsetTop : '30'
	        });

	        return false;
	    });
    });
}(window, $));
