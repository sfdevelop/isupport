
var screenw = $(window).width();
var screenh = $(window).height();
var scrolltop = $(window).scrollTop();

var last_scrolltop = 0;


// Popups
 
var pop_scr_m_t;
var pop_scr_auto_m_t;

$('.notif_popup_close, .notif_popup_back').click(function(){
  $('.notif_popup, .notif_popup_back').removeClass('opened').fadeOut(300); 
});

function pop_scr_func() { 
  if ( screenw < 750 ) { pop_scr_m_t = 20; } ;
  if ( screenw > 750 && screenw < 1100 ) { pop_scr_m_t = 30; };
  if ( screenw > 1100 ) { pop_scr_m_t = 50; };
};

function pop_scr_sizes() {
  var popup_opened = $('.notif_popup.opened'); 
  popup_opened.css('height','auto');
  var pop_scr_auto_h = popup_opened.outerHeight();
  var pop_scr_auto_h_w_m = pop_scr_auto_h + ( pop_scr_m_t * 2 );
  var pop_scr_top = scrolltop + pop_scr_m_t; 
  popup_opened.attr('pop_scr_top',''+pop_scr_top+'');

  if ( pop_scr_auto_h_w_m > screenh ) {   
    popup_opened.css({
      'position':'absolute',
      'top':''+pop_scr_top+'px',
      'margin-top':'0'
    });
  } else {    
    pop_scr_auto_m_t = pop_scr_auto_h / 2;
    popup_opened.css({
      'position':'fixed',
      'top':'50%',
      'margin-top':'-'+pop_scr_auto_m_t+'px'
    });
  }
};

function pop_scr_scroll() {  
  var popup_opened = $('.notif_popup.opened'); 
  var pop_scr_top = parseInt(popup_opened.attr('pop_scr_top'));
  var pop_scr_auto_h = popup_opened.outerHeight();
  var pop_scr_auto_h_w_m = pop_scr_auto_h + ( pop_scr_m_t * 2 );
  
  if ( last_scrolltop > scrolltop && pop_scr_auto_h_w_m > screenh && scrolltop < ( pop_scr_top - pop_scr_m_t ) ) { 
    var new_pop_scr_top = scrolltop + pop_scr_m_t; 
    popup_opened.css({
      'position':'absolute',
      'top':''+pop_scr_top+'px'
    }).attr('pop_scr_top',''+new_pop_scr_top+'');

  };
};



$(document).ready(function(){
  screenw = $(window).width();
  screenh = $(window).height();
  scrolltop = $(window).scrollTop();
  
  pop_scr_func();
  pop_scr_sizes();
  pop_scr_scroll(); 

});



$(window).scroll(function() {
  scrolltop = $(window).scrollTop();
  
  pop_scr_scroll(); 
  
  last_scrolltop = scrolltop;
});



$(window).on('resize', function(){
  screenw = $(window).width();
  screenh = $(window).height();
  scrolltop = $(window).scrollTop();
 
  pop_scr_func();
  pop_scr_sizes();
  
});

