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

window.onload = function() {

    var btn = document.getElementById('reviews-btn');

    function getCoords(elem) {
  		var box = elem.getBoundingClientRect();
  		var bottom = box.bottom + pageYOffset;
		return bottom;
    }

    var btnCoord = getCoords(btn);
    var winY = document.documentElement.clientHeight;

    window.onscroll = function() {
  
    	if(btnCoord <= winY) {
    		console.log('I love Epixx' + ' ' + btnCoord + ' ' + winY);
    	}
  
    }

};

// // 
// window.onscroll = function() {


// }

//   // // опеределяем насколько прокручен документ
//   // var scrolled = window.pageYOffset || document.documentElement.scrollTop;

//   // // получаем кнопку
//   var btn = document.getElementById('reviews-btn');


//   var btnCoord = btn.

//   // координата элемента в документе
//   function getCoords(elem) {

//   	var box = elem.getBoundingClientRect();
//   	var top = box.top + pageYOffset;

// 	return top;

//    }
// console.log(getCoords(btn));
//    //   if(scrolled >=  getCoords(btn)) {
//   	// alert('sdsdsdsdsds');
//   	// }
