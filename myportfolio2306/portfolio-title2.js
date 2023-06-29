$(function(){
    $('.hamburger').on('click', function() {
      hamburger();
    });   
  });
  
  function hamburger() {
    $('.hamburger').toggleClass('is-active');
  
    if ($('.hamburger').hasClass('is-active')) {
      $('.botan').addClass('is-active');
      
      
    } else  {
      $('.botan').removeClass('is-active');
    
}};


