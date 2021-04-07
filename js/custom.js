$(function(){
    
    // ============= preloader Pare js   ============= 
    
$(window).on('load',function(){
    $('.preloader').delay(500).fadeOut(1000);
});   
    
    

//  ====== Type JS
    $(".typed").typed({
		strings: ["Web Designer.", "Freelancer.", "Frontend-Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 700,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
  
    
//    ========== Feed-back slider
    $('.feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots: true,
    autoplaySpeed: 2000,
});

    
    //    ================= BACK TO TOP PART ============

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    });
    
    //    ================= SCROLLING PART ============
  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.back-to-top').fadeIn(800);
        } 
	else {
            $('.back-to-top').fadeOut(800);
        }
	
//    ================= ADD CLASS STICKY MENU PART ============

        if (scrolling > 250) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg'); 
        }
    });
    
    //animation scroll js

var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});
    
    
    // ===== Work VenuBox =====
    
    $(document).ready(function(){
    $('.venobox').venobox(); 
});
    
  
    
});
