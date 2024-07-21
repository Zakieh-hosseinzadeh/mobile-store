$('.bxslider').bxSlider({
    mode: 'fade',
    speed: 700,
    startSlide: 1,
    control: false,
    //       // nextSelector: $('#nextSlide'),
    //       //   prevSelector : $('#prevSlide'),
    //       //   nextText : '<i class="fa-solid fa-angle-right"></i>',
    //       //   prevText : '<i class="fa-solid fa-angle-left"></i>',
    auto: false,
})


$('.b-sell-box').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    control: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})


$('.menu-pup a').click(function () {
    // alert('salam')
    let className = $(this).attr('class')

    // console.log(className)
    $('a.active').removeClass('active');
    $(this).addClass('active')

    if (className === 'all') {
        $('.popular').fadeIn(500)
    } else {
        $('.popular').hide().filter('.' + className).fadeIn(500)

    }
    return false;
})

const showMenu = document.querySelector('#show-menu')
showMenu.onclick = function () {
    //document.getElementById("box-mother-menu").classList.replace("box-mother-menu-close","box-mother-menu-open")
    document.getElementById("menu-wrapper").classList.add('menu-wrapper-close')
}

const removeMenu = document.querySelector('#remove-menu')
removeMenu.onclick = function () {
    document.getElementById("menu-wrapper").classList.remove("menu-wrapper-close")
}


AOS.init();

