

$(function () {
    'use strict'
    
    // height-slider    
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH) );

    // featured-work
    $('.featured-work ul li').on('click',function(){
     $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('.images .col-md-3').css('opacity',1);
        } else {
            $('.images .col-md-3').css('opacity','.09');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });  
});



