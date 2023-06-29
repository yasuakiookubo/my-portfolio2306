$(function(){
    $('.hamburger').on('click', function() {
      hamburger();
    });
    
       
    $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        $(this).stop().addClass('slide-left');
      }
    });
    $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        $(this).stop().addClass('slide-right');
      }
    });
    $('.bal').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        $(this).stop().addClass('balloon');
      }
    });
  });
  
  function hamburger() {
    $('.hamburger').toggleClass('is-active');
  
    if ($('.hamburger').hasClass('is-active')) {
      $('.botan').addClass('is-active');
      
    } else {
      $('.botan').removeClass('is-active');
      
    }
  }