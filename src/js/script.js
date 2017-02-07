$(document).ready(function(){
				window.onload = function() {
					var toggler = document.getElementById('toggler');
					toggler.onclick = function(e){
					e.preventDefault();
					toggler.classList.toggle('toggler--close');
					document.getElementById('main-nav').classList.toggle('header-nav__list--visible');
					}
				}
				loadFont(
		'FiraSans', 'PTSerifRegular',                      // название шрифта
		'/css/font.css?v=1'  // откуда с сервака тянуть CSS с закодированным в base64 форматом WOFF   // откуда с сервака тянуть CSS с закодированным в base64 форматом WOFF2
		);
				alert(111);
});
