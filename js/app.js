$(document).ready(function(){
  $('#menu-toggle').click(function(){
    this.classList.toggle('active');
    $('.navbar__list').toggleClass('navbar-open');
    $('.navbar__list').toggleClass('navbar-close');
  });
  $('.navbar__item').click(function(){
    $('#menu-toggle').removeClass('active');
    $('.navbar__list').toggleClass('navbar-open');
    $('.navbar__list').toggleClass('navbar-close');
  })

});