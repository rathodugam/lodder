
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.main_header').addClass('fixed');
    } else {
       $('.main_header').removeClass('fixed');
    }
});

$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function(e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});




var swiper = new Swiper(".banner_slider", {
  spaceBetween: 0,
  loop: true,
   effect: 'fade', fadeEffect: { crossFade: true },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".info_slider", {
  spaceBetween: 15, 
  slidesPerView: "auto",
  slidesPerView: 2.5,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {  
    '1680': {
      slidesPerView: 3.5},
    '1024': {
      slidesPerView: 2.5},
    '768': {
      slidesPerView: 1.5},
    '580': {
      slidesPerView: 2.5},
    '320': {
      slidesPerView: 1.2},
  },
});

var swiper = new Swiper(".case_stydy_slider", {
  spaceBetween: 0, 
  slidesPerView: "auto",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function(sw) {
      $('.case_stydy_slider .image-slider__total').text($('.case_stydy_slider .swiper-slide:not(.swiper-slide-duplicate)').length)
      $('.image-slider__current').text(sw.realIndex + 1)
    },
    slideChange: function (sw) {
      $('.image-slider__current').text(sw.realIndex + 1)
      },
    },
});

var swiper = new Swiper(".keynote_speaker_slider_in", {
  spaceBetween: 0, 
  slidesPerView: "auto",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function(sw) {
      $('.keynote_speaker_slider_in .image-slider__total').text($('.keynote_speaker_slider_in .swiper-slide:not(.swiper-slide-duplicate)').length)
      $('.image-slider__current').text(sw.realIndex + 1)
    },
    slideChange: function (sw) {
      $('.image-slider__current').text(sw.realIndex + 1)
      },
    },
});


var swiper = new Swiper(".team_slider", {
  spaceBetween: 15, 
  slidesPerView: "auto",
  slidesPerView: 3.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '1024': {
      slidesPerView: 3.5},
    '768': {
      slidesPerView: 2.5},
    '580': {
      slidesPerView: 2.5},
    '320': {
      slidesPerView: 1.2},
  },
});

var swiper = new Swiper(".contact_help_slider_in", {
  spaceBetween: 10, 
  slidesPerView: "auto",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function(sw) {
      $('.contact_help_slider_in .image-slider__total').text($('.contact_help_slider_in .swiper-slide:not(.swiper-slide-duplicate)').length)
      $('.image-slider__current').text(sw.realIndex + 1)
    },
    slideChange: function (sw) {
      $('.image-slider__current').text(sw.realIndex + 1)
      },
    },
});

jQuery(document).ready(function($){
  //open/close mega-navigation
  $('.cd-dropdown-trigger').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });

  //close meganavigation
  $('.cd-dropdown .cd-close').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });

  //on mobile - open submenu
  $('.has-children').children('a').on('click', function(event){
    //prevent default clicking on direct children of .has-children
    event.preventDefault();
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
  });

  //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
  var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
  $('.cd-dropdown-content').menuAim({
    activate: function(row) {
      $(row).children().addClass('is-active').removeClass('fade-out');
      if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
    },
    deactivate: function(row) {
      $(row).children().removeClass('is-active');
      if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        $(row).children('ul').addClass('fade-out')
      }
    },
    exitMenu: function() {
      $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
      return true;
    },
    submenuDirection: submenuDirection,
  });

  //submenu items - go back link
  $('.go-back').on('click', function(){
    var selected = $(this),
        visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
    selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
  });

  function toggleNav(){
    var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
    $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
    $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
    if( !navIsVisible ) {
      $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('.has-children ul').addClass('is-hidden');
        $('.move-out').removeClass('move-out');
        $('.is-active').removeClass('is-active');
      });
    }
  }

  //IE9 placeholder fallback
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  if(!Modernizr.input.placeholder){
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
  }
});