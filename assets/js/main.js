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

$.extend($.validator.messages, {
    required: "Ошибка. Поле обязательно для заполнения",
    email: "Ошибка. Пожалуйста, введите корректный адрес электронной почты",
});

$("form").each(function() {
    $(this).validate({
        errorPlacement: function(e, i) {
              e.addClass("error-message"),
              e.appendTo(i.parent("div"))
        },
        highlight: function(e) {
            $(e).addClass("has-error").parent().addClass("has-error");
        },
        unhighlight: function(e) {
            $(e).removeClass("has-error").parent().removeClass("has-error");
        },
        ignore: [],
        rules: {
            name: "required",
            tel: {
                required: !0
            },
            email: {
                required: !0,
                email: true
            }
        },
    });
});

if ($('.js--datepicker').length > 0) {
    $( ".js--datepicker" ).datepicker();
    $.datepicker.regional['ru'];
}