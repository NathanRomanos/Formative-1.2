console.log('my script is working');


$(document).ready(function(){
  $('#menu').click(function(){
    $('.navMobile').fadeToggle('active');
  })

  $('#close').click(function(){
    $('.navMobile').fadeOut(100);
  })

});
