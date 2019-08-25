console.log('my script is working');


$(document).ready(function(){
  $('#menu').click(function(){
    $('.navMobile').fadeToggle(200);
  })

  $('.close').click(function(){
    $('.navMobile').fadeOut(200);
  })

// menu change
  $('.change').click(function(){
    $('.menu__change').fadeToggle(200);
  })

  $('.menu__close').click(function(){
    $('.menu__change').fadeOut(200);
  })

});


$(document).ready(function(){
  $('#sp').click(function(){
    $('.menu__content--SP, .menu__header--SP').removeClass("inactive").addClass( "active" );
    $('.menu__dietryInfo').removeClass("inactive").addClass( "active" );
    $('.menu__content--LB, .menu__header--LB').removeClass("active").addClass( "inactive" );
    $('.menu__content--DE, .menu__header--DE').removeClass("active").addClass( "inactive" );
    $('.menu__content--SI, .menu__header--SI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DI, .menu__header--DI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DR, .menu__header--DR').removeClass("active").addClass( "inactive" );
  })

  $('#lb').click(function(){
    $('.menu__content--LB, .menu__header--LB').removeClass("inactive").addClass( "active" );
    $('.menu__dietryInfo').removeClass("inactive").addClass( "active" );
    $('.menu__content--SP, .menu__header--SP').removeClass("active").addClass( "inactive" );
    $('.menu__content--DE, .menu__header--DE').removeClass("active").addClass( "inactive" );
    $('.menu__content--SI, .menu__header--SI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DI, .menu__header--DI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DR, .menu__header--DR').removeClass("active").addClass( "inactive" );
  })

  $('#de').click(function(){
    $('.menu__content--DE, .menu__header--DE').removeClass("inactive").addClass( "active" );
    $('.menu__dietryInfo').removeClass("inactive").addClass( "active" );
    $('.menu__content--LB, .menu__header--LB').removeClass("active").addClass( "inactive" );
    $('.menu__content--SP, .menu__header--SP').removeClass("active").addClass( "inactive" );
    $('.menu__content--SI, .menu__header--SI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DI, .menu__header--DI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DR, .menu__header--DR').removeClass("active").addClass( "inactive" );
  })

  $('#si').click(function(){
    $('.menu__content--SI, .menu__header--SI').removeClass("inactive").addClass( "active" );
    $('.menu__dietryInfo').removeClass("inactive").addClass( "active" );
    $('.menu__content--LB, .menu__header--LB').removeClass("active").addClass( "inactive" );
    $('.menu__content--SP, .menu__header--SP').removeClass("active").addClass( "inactive" );
    $('.menu__content--DE, .menu__header--DE').removeClass("active").addClass( "inactive" );
    $('.menu__content--DI, .menu__header--DI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DR, .menu__header--DR').removeClass("active").addClass( "inactive" );
  })

  $('#di').click(function(){
    $('.menu__content--DI, .menu__header--DI').removeClass("inactive").addClass( "active" );
    $('.menu__dietryInfo').removeClass("inactive").addClass( "active" );
    $('.menu__content--LB, .menu__header--LB').removeClass("active").addClass( "inactive" );
    $('.menu__content--SP, .menu__header--SP').removeClass("active").addClass( "inactive" );
    $('.menu__content--DE, .menu__header--DE').removeClass("active").addClass( "inactive" );
    $('.menu__content--SI, .menu__header--SI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DR, .menu__header--DR').removeClass("active").addClass( "inactive" );
  })

  $('#dr').click(function(){
    $('.menu__content--DR, .menu__header--DR').removeClass("inactive").addClass( "active" );
    $('.menu__dietryInfo').removeClass("active").addClass( "inactive" );
    $('.menu__content--LB, .menu__header--LB').removeClass("active").addClass( "inactive" );
    $('.menu__content--SP, .menu__header--SP').removeClass("active").addClass( "inactive" );
    $('.menu__content--DE, .menu__header--DE').removeClass("active").addClass( "inactive" );
    $('.menu__content--SI, .menu__header--SI').removeClass("active").addClass( "inactive" );
    $('.menu__content--DI, .menu__header--DI').removeClass("active").addClass( "inactive" );
  })

});
