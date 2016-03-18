(function(win, doc, $, undefined) {
    $(function() {

    	// WOW
        new WOW().init();

        // Typed text
        $(".typed-text").typed({
            strings: ["Kolektivní energie^1000 =", "^300 Levnější plyn^1000,<br>elektřina^1000 a biomasa.^3000"],
            typeSpeed: 80,
            contentType: 'html',
            loop: true
        });

        // Scroll to
	    $('a[data-scroll]').on('click', function(e) {

			e.stopImmediatePropagation();	
			e.preventDefault();

	        var $el = $(this),
	        	$win = $(win),
	        	scrollTo = $el.data('scroll');

			setTimeout(function() {
			    $('html,body').scrollTo(scrollTo, {
			        duration : '1000',
			        offsetTop : '30'
			    });

				if(scrollTo.indexOf("top") < 0) {
					$win.changeHashWithoutScrolling(scrollTo);
				} else {
					win.location.hash = '#';
				}
			}, 0);

	        return false;
	    });

		// Statistic Counter
		/*
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
		*/
    });

	$(function(){
	    var isDuplicateScrollEvent,
	        scrollTimeStart = new Date,
	        $win = $(win),
	        $doc = $(doc),
	        scrollPercent;

	    $win.scroll(function() {
	        scrollPercent = Math.round(100 * ($win.height() + $win.scrollTop())/$doc.height());
	        if (scrollPercent > 90 && !isDuplicateScrollEvent) { //page scrolled to 90%
	            isDuplicateScrollEvent = 1;
	            ga('send', 'event', 'scroll',
	                'Window: ' + $win.height() + 'px; Docoument: ' + $doc.height() + 'px; Time: ' + Math.round((new Date - scrollTimeStart )/1000,1) + 's'
	            );
	        }
	    });
	});
}(window, document, $));
