console.log('my script is working');


$(document).ready(function(){
  $('#menu').click(function(){
    $('.navMobile').fadeToggle(200);
  })

  $('.close').click(function(){
    $('.navMobile').fadeOut(200);
  })

// menu change
  $('#change').click(function(){
    $('.menu__change').fadeToggle(200);
  })

  $('#sp').click(function(){
    $('.menu__content--SP, #menu__header--SP').fadeToggle(000);
    $('.menu__content--LB, #menu__header--LB').fadeToggle(000);
  })

  $('.menu__close').click(function(){
    $('.menu__change').fadeOut(200);
  })

});
