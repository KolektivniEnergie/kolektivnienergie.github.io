/** 
 *------------------------------------------------------------------------------
 *o2 Onepage
 *------------------------------------------------------------------------------
 * @authors       Darkjoker
 * @Link:         http://joker.rocks/
 *------------------------------------------------------------------------------
 */

jQuery(document).ready(function($) {
    "use strict";
    var mainNavbar  =   $('.navbar'),
        mainNav     =   mainNavbar.find('.nav'),
        barPosition =   $(window).scrollTop(),
        mainNavlist =   mainNavbar.find('.nav>li'),
        scOffset    =   mainNavbar.outerHeight();

    /* ====================================
    * main nav
    * =======================================
    */
    $('.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        easing: 'easeInOutExpo',
        scrollThreshold: 0.2, 
        scrollOffset: scOffset,
        scrollSpeed: 1300
    });
    if (barPosition > 400) {
        mainNavbar.addClass('fadeInDown navbar-after-scroll fadeIn').removeClass('drop-nav fadeOut fadeOutUp').width();             
    }
    $('.navbar-toggle').click(function(e) {
        if (barPosition <100) {
            mainNavbar.toggleClass('navbar-after-scroll fadeInDown drop-nav');
        };
    });
    $(window).scroll(function(e) {
        barPosition =$(this).scrollTop();
        if (barPosition > 400) {
            mainNavbar.addClass('fadeInDown navbar-after-scroll fadeIn').removeClass('drop-nav fadeOut fadeOutUp').width();                
        }else {
            mainNavbar.addClass('fadeOutUp').removeClass('fadeInDown fadeIn').width();
            if (barPosition < 100) {
                mainNavbar.addClass('drop-nav').removeClass('navbar-after-scroll fadeOutUp');
                 $('.navbar-collapse').attr('aria-expanded', 'false').removeClass('in');
            };
        }
    });
    $('.goto').click(function(e) {
        e.preventDefault();
        var positonPoint = $(this).attr('href');
        $('html,body').animate({
            scrollTop:$(positonPoint).offset().top-scOffset
        }, 800);
    });
    /* ====================================
    * Parallax
    * =======================================
    */
    $('.section-home').parallax("50%", 0.4);

    /* =======================================
    * Animation
    * =======================================
    */
    var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true        // act on asynchronously loaded content (default is true)
    });
    wow.init();
    /* =======================================
    * Statistic Counter
    * =======================================
    */
    $('.number').counterUp({
        delay: 10,
        time: 2000
    });
    /* =======================================
    * carousel
    * =======================================
    */
    var twIcon  = $('#twittertemplate').html();
    if($('.tweet').length!=0){
        $('.tweet').twittie({
            username:'codekik',
            dateFormat: '%b. %d, %Y',
            template:twIcon,
            count: 4,
            apiPath:"assets/twitter/tweet.php",
        },function(){
            $(".tweet ul").addClass("twitte-carousel owl-carousel owl-theme");
            $('.twitte-carousel').owlCarousel({
                singleItem:true,
                autoPlay   : true,
                pagination:false,
                navigation : true,
                navigationText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ]
            });
        });
    }
    $( '.screenshot-images' ).owlCarousel({
        items       : 4,
        itemsCustom : [
            [0, 1],
            [480, 2],
            [768, 3],
            [992, 4]
        ],
    });

    $('.appreveiws-carousel').owlCarousel({
        singleItem:true,
        autoPlay   : true,
        pagination:false,
        navigation : true,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ]
    });


    /* =======================================
    * Nivo Lightbox
    * =======================================
    */

    $( '.screenshot-images a' ).nivoLightbox({
        effect : 'fadeScale',
        beforeShowLightbox : function() {
            $( '#document' ).addClass( 'blur' );
        },
        afterHideLightbox : function() {
            $( '#document' ).removeClass( 'blur' );
        },
    });

    /* =======================================
    * get app
    * =======================================
    */

    jQuery(window).load(function() {
        $('.zoomer-image').loupe({
            width: 130, // width of magnifier
            height: 130, // height of magnifier
            loupe: 'magnifier' // css class for magnifier
        });
        setTimeout(function() {
            var magnifieTop,magnifieLeft,joomerfrm;
            joomerfrm     = $('.zoomer-frame');
            magnifieTop   = joomerfrm.outerHeight()+joomerfrm.offset().top;
            magnifieLeft  = joomerfrm.offset().left+55;
            $('.magnifier').addClass('htfix');

            $('.magnifier').css({
               positon: 'relative',
               top: magnifieTop-100,
               left   : magnifieLeft
            });
            var rcount = 1;
            $(window).smartresize(function(){
               magnifieTop    = parseInt(joomerfrm.outerHeight());
               magnifieTop    =magnifieTop/2;
               magnifieTop    =magnifieTop+parseInt(joomerfrm.offset().top);
               magnifieLeft   = joomerfrm.offset().left+55;
                if (rcount > 2) {
                   $('.htfix').css({
                       top    : magnifieTop-20,
                       left   : magnifieLeft
                   });
                };
               rcount++;
            });
        },1000);
    });
    
    /* =======================================
    * fit Videos 
    * =======================================
    */
    $(function() {
        var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
        $fluidEl = $(".workway-video-wraper");
                
        $allVideos.each(function() {
        
          $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
        });
        
        $(window).resize(function() {
        
          var newWidth = $fluidEl.width();
          $allVideos.each(function() {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));
			});
        }).resize();
    });
    /* =======================================
    * accordion 
    * =======================================
    */
    $('.panel-heading').click(function(e) {
        $('.panel-heading').removeClass('tab-collapsed');
        var collapsCrnt = $(this).find('.collapse-controle').attr('aria-expanded');
        //console.log(collapsCrnt);
        if (collapsCrnt != 'true') {
            $(this).addClass('tab-collapsed');
        }
    });

    /* =======================================
    * Pricing package 
    * =======================================
    */
    $('.pricing-table').hover(function() {
        $('.golden-plan').removeClass('active');
    }, function() {
        $('.golden-plan').addClass('active');
    });

    /* =======================================
    * Subscribe form
    * =======================================
    */
    $( '.subscription-form' ).on('submit', function( e ) {
        e.preventDefault();

        var $el = $( this ),
            $alert = $el.find( '.validation-text'),
            $submit = $el.find( '.btn-submit .fa' ),
            action = $el.attr( 'action' );

        // button loading 
        $submit.addClass('fa-spinner fa-pulse').removeClass('fa-paper-plane');

        // reset alert
        $alert.removeClass( 'alert-danger alert-success').css({
            display: 'block'
        });
        $alert.html( '' );
        $.ajax({
            type     : 'POST',
            url      : 'assets/subscribe-mailchimp.php',
            data     : $el.serialize() + '&ajax=1',
            dataType : 'JSON',
            success  : function( response ) {
                if ( response.status == 'error' ) {
                    $alert.html( response.message );
                    $alert.addClass( 'alert-danger' ).fadeIn( 500 );
                } 
                else {
                    $el.trigger( 'reset' );
                    $alert.html( response.message );
                    $alert.addClass( 'alert-success' ).fadeIn( 500 );
                }
                $submit.addClass('fa-paper-plane').removeClass('fa-spinner fa-pulse');
            },
        })
    });
    /* =================================
    ===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
    =================================== */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }
});