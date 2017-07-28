'use strict';

function fadeIn() {
	$('body').fadeIn(500);
	$('header h1').toggleClass('fade-full');
	$('.view-portfolio').toggleClass('fade-full');
}

function onScroll() {
	var lastPosition = 0;
	var currentPosition = 0;
	var navFixed = false;
	var aboutViewed = false;
	var aboutTop = 0;
	var aboutBottom = 0;
	var windowBottom = 0;
	$(window).scroll(function() {
		currentPosition = $(this).scrollTop();
		if(!(aboutViewed)) {
			aboutTop = ($('.columns p:nth-child(1)').offset()).top;
			aboutBottom = aboutTop + $('.columns p:nth-child(1)').height();
			windowBottom = currentPosition + $(window).height();

			if ((aboutBottom <= windowBottom) && (aboutTop >= currentPosition)) {
				$('.columns p:nth-child(2)').toggleClass('fade-90');
				$('.columns p:nth-child(3)').toggleClass('fade-90');
				aboutViewed = true;
			}
		} 
			
		if((navFixed === true) && (currentPosition < 50) && (currentPosition < lastPosition)) {
			$('nav').fadeOut(500);
			$('header').toggleClass('fade-half');
			$('header h1').toggleClass('fade-full');
			navFixed = false;
		} else if ((navFixed === false) && (currentPosition > 50) && (lastPosition <= 50)) {
			$('nav').fadeIn(500);
			$('header').toggleClass('fade-half');
			$('header h1').toggleClass('fade-full');
			navFixed = true;
		}
		lastPosition = currentPosition;
	})
}

function navBar() {

	$('a.top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
		scrollTop: 0
		}, 800);
	})
	$('a.about').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
		scrollTop: $('#about').offset().top - 40
		}, 800);
	})
	$('a.portfolio').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
		scrollTop: $('#portfolio').offset().top - 40
		}, 800);
	})
	$('a.contact').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
		scrollTop: $('#contact').offset().top
		}, 800);
	})
}

$(navBar());

$(onScroll());

$(fadeIn());