
/*липкое меню*/
window.onscroll = function () { myFunction() };
let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		$('#navbar p').css({ 'opacity': 1 });
		/*$('#navbar p:first').css({ 'font-size': '2vw' });*/

	} else {
		navbar.classList.remove("sticky");
		$('#navbar p').css({ 'opacity': 0 });
	}
}

//карусель
$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
	$(document).on('keydown', function( event ) {
		if(event.keyCode == 37) {
			$owl.trigger('prev.owl')
		}
		if(event.keyCode == 39) {
			$owl.trigger('next.owl')
		}
	});
});
	
let $owl = $('.carousel');
$owl.children().each(function (index) {
	$(this).attr('data-position', index);
});
$(document).on('click', '.owl-item>div', function () {
	let $speed = 300;
	$owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
$owl.owlCarousel({
	loop: true,
	center: true,
	stagePadding: 70,
	nav: true,
	dots: true,
	navText: ['&lsaquo;', '&rsaquo;'],
	responsive: {
		0: { items: 1 },
		600: { items: 2 },
		992: { items: 3 },
		1200: { items: 3 },
		1600: { items: 4 }
	}
});

/*scroll up*/
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 200);
		return false;
	});
});

/*menu*/
$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
	
}
$('.mobile ul li').click(function(){
	$('.nav').hide(300);
});


/*фокус на полях формы*/
$(".input-text").focus(function () {
	$(this).parent().addClass("focus");
}).blur(function () {
	if ($(this).val() === '') {
		$(this).parent().removeClass("focus");
	}
})


