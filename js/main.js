(function(window, document, $) {
    $(function() {

        new WOW().init();

        $(".typed-text").typed({
            strings: ["Kolektivní energie^1000 =", "^300 Levnější plyn^1000,<br>elektřina^1000 a biomasa.^3000"],
            typeSpeed: 80,
            contentType: 'html',
            loop: true
        });

	    $('a[data-scroll]').on('click', function(e) {
	    	e.stopImmediatePropagation();
	        var $el = $(this);
	        var scrollTo = $el.data('scroll');
	        $('html,body').scrollTo(scrollTo, {
	            duration : '1000',
	            offsetTop : '30'
	        });

	        if(scrollTo.indexOf("#") >= 0) {
	        	location.href = scrollTo;
	        }

	        return false;
	    });
    });

	$(function(){
	    var isDuplicateScrollEvent,
	        scrollTimeStart = new Date,
	        $window = $(window),
	        $document = $(document),
	        scrollPercent;

	    $window.scroll(function() {
	        scrollPercent = Math.round(100 * ($window.height() + $window.scrollTop())/$document.height());
	        if (scrollPercent > 90 && !isDuplicateScrollEvent) { //page scrolled to 90%
	            isDuplicateScrollEvent = 1;
	            ga('send', 'event', 'scroll',
	                'Window: ' + $window.height() + 'px; Document: ' + $document.height() + 'px; Time: ' + Math.round((new Date - scrollTimeStart )/1000,1) + 's'
	            );
	        }
	    });
	});
}(window, document, $));
