
// Слайдер
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});



// Плавный скрол якоря
$('.box-social-link, .service-link').on('click', function() { 

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,   
        easing: "linear" 
    });

    return false;
});

