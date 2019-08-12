$(document).ready(function () {
 if( $(".swiper-container").length ) {
	  var mySwiper = new Swiper ('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".js--doctor-pag",
			clickable: true,
		},
	  });
        $(window).resize(function() {
            mySwiper.update(true),
            console.log("mySwiper update")
        })
 }
});

$(window).on('scroll load', function() {
 var headerFixedHeight = 200;
 
 if ($(this).scrollTop() > headerFixedHeight && !($('body').hasClass("scrolled")) ) {
  $('body').addClass("scrolled");
 } else if($(this).scrollTop() <= headerFixedHeight && $('body').hasClass("scrolled")) {
  $('body').removeClass("scrolled");
 }
 
});