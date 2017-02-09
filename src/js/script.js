$(document).ready(function() {

	var toggler = document.getElementById('toggler');
	var mainNav = document.getElementById('main-nav');

	mainNav.classList.toggle('header-nav__list--close');

	toggler.onclick = function(e){
		e.preventDefault();
		mainNav.classList.toggle('header-nav__list--visible');		
	}	

});
