console.log('my script is working');


$(document).ready(function(){
  $('#menu').click(function(){
    $('.navMobile').fadeToggle(200);
  })

  $('#close').click(function(){
    $('.navMobile').fadeOut(200);
  })

});
