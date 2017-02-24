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
    arrows: false,
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

$('.reviews__list').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick"
    }
  ]
});

$('.single-room__gallery').slick({
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.single-categories__list').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 321,
      settings: "unslick"
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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

    function winY() {
      return document.documentElement.clientHeight + pageYOffset;
    }

    if(btnCoord <= winY()) {
      btn.classList.add('btn--animation');  
    }

    window.onscroll = function() {      
  
      if(btnCoord <= winY()) {        
        btn.classList.add('btn--animation');
      }
  
    }

    var recImg = document.querySelectorAll('.recreation__item img');
    var imgLength = recImg.length;

    function changeImg(e) {
      var currentImg = e.target;
      for(var i = 0; i < imgLength; i++) {
        if(recImg[i] == currentImg) {
          recImg[i].classList.toggle('shadow');
        } else {
          recImg[i].classList.remove('shadow');
        }
      }
    }

    for(var j = 0; j < imgLength; j++) {
      recImg[j].addEventListener('click', changeImg);
  }

};