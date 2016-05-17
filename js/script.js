//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Treatments
(function () {
	'use strict';

	var sideTabsPaneHeight = function() {
		var navHeight = $('.nav-tabs.nav-tabs-left').outerHeight() || $('.nav-tabs.nav-tabs-right').outerHeight() || 0;

		var paneHeight = 0;

		$('.tab-content.side-tabs .tab-pane').each(function(idx) {
			paneHeight = $(this).outerHeight() > paneHeight ? $(this).outerHeight() : paneHeight;
		});

		$('.tab-content.side-tabs .tab-pane').each(function(idx) {
			$(this).css('min-height', navHeight + 'px');
		});
	};
	
  $(function() {
    sideTabsPaneHeight();

		$( window ).resize(function() {
			sideTabsPaneHeight();
		});

		$( '.nav-tabs.nav-tabs-left' ).resize(function() {
			sideTabsPaneHeight();
		});
	});
}());
