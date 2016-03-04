(function(win, $) {
    $(function() {

        new WOW().init();

        $(".typed-text").typed({
            strings: ["Kolektivní energie^1000 =", "^300 Levnější plyn^1000<br>a elektřina.^3000"],
            typeSpeed: 80,
            contentType: 'html',
            loop: true
        });

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
