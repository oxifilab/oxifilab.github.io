(function($) { "use strict";

	
	//Preloader
	
	$(window).on('load', function(e) { // makes sure the whole site is loaded
		$(".loader svg").fadeOut(); // will first fade out the loading animation
		$(".loader").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})	
		
		
	//Parallax & fade on scroll	
	
	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/450)
		});
	  });    
	}
	scrollBanner();
	
	
	//Page Scroll to id
	
	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".navbar-nav li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".navbar-nav li a",
			offset: 68,
			scrollSpeed:800
		});
				
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
				
	}); 
	
	
	//parallax hover tilt effect	
	
	$('.js-tilt').tilt({
		glare: false
	})
	
	
	/* Parallax effect */
			
	$(window).enllax();
	
	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();
	
	
	$(document).ready(function() {

	
		//Scroll back to top
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})

		
		//Countdown
		const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;
	let countDown = new Date('May 5, 2022 12:00:00 GMT+0000' ).getTime(),
		x = setInterval(function() {
		let now = new Date().getTime(),
			distance = countDown - now;

		
		document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)) + ' h',
		document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)) +	' m',
		document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second) + ' s';
	}, second)
		
			//OtherCountdown
			
			const secondx = 1000,
			minutex = secondx * 60,
			hourx = minutex * 60,
			dayx = hourx * 24;
		let countDownx = new Date('June 4, 2022 12:00:00 GMT+0000').getTime(),
			xx = setInterval(function() {
			let nowx = new Date().getTime(),
				distancex = countDownx - nowx;

			document.getElementById('idays').innerHTML = Math.floor(distancex / (dayx)) + " Days",
			document.getElementById('ihours').innerHTML = Math.floor((distancex % (dayx)) / (hourx)) + " Hours",
			document.getElementById('iminutes').innerHTML = Math.floor((distancex % (hourx)) / (minutex)) + " Mins",
			document.getElementById('iseconds').innerHTML = Math.floor((distancex % (minutex)) / secondx) + " Secs";
		}, secondx)

	
	

	
		/* Roadmap Carousel */		
		
		$("#owl-roadmap").owlCarousel({
			items : 4,
			itemsDesktop : [1199,4], 
			itemsDesktopSmall : [991,3],
			itemsTablet: [767,2], 
			itemsMobile : [575,1], 
			pagination : false,
			autoPlay : false,
			slideSpeed : 300
		});	
		(function ($) { 
			var owl = $("#owl-roadmap");
			owl.owlCarousel();	
			
			// Custom Navigation Events
			$(".next-roadmap").click(function(){
				owl.trigger('owl.next');
			})
			$(".prev-roadmap").click(function(){
				owl.trigger('owl.prev');
			})	
		} )(jQuery);
		
		
		/* Video */
		
		$(".container").fitVids();
						
		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=7b5eea" width="500" height="281" frameborder="0"></iframe>');
			}
		});	
		
		
		/* Contact form */		

		


		// when the form is submitted
		

			
						
	});

	
	
	
  })(jQuery); 

  //countdown timer