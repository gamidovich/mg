$(document).ready(function() {

	var toggler = document.getElementById('toggler');
	var mainNav = document.getElementById('main-nav');

	mainNav.classList.toggle('header-nav__list--close');

	toggler.onclick = function(e){
		e.preventDefault();
		mainNav.classList.toggle('header-nav__list--visible');		
	}	
});

$(document).ready(function(){

  	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [{

      	breakpoint: 768,
      		settings: {
        	slidesToShow: 5,
        	slidesToScroll: 1
      	    }

      }]
});

});