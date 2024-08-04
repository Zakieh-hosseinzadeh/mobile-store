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


const toggleButton = document.getElementById('themeToggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
toggleButton.setAttribute('data-theme', currentTheme)
toggleButton.addEventListener('click', function () {
    const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    toggleButton.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
});

let phoneNumber = "0910-912-4505";
$(document).ready(function () {
    let modalClosed = false;

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let documentHeight = $(document).height();

        if (modalClosed===false &&scrollTop > (documentHeight - windowHeight) / 2 && !modalClosed) {
            $('#overlay').css('display','flex')
            $('body').css('overflow', 'hidden'); // قفل کردن اسکرول
        }
    });

    $('#close_icon').on('click', function () {
        modalClosed = true;
        $('#overlay').hide();
        $('body').css('overflow', 'auto'); // باز کردن اسکرول
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#overlay')) {
            modalClosed = true;
            $('#overlay').hide();
            $('body').css('overflow', 'auto'); // باز کردن اسکرول
        }
    });
});


function closePopup() {
    document.getElementById('overlay').style.display = 'none'
}


$('.link-product').click(function () {
    let $temp = $("<input>")
    $("body").append($temp)
    document.execCommand("copy")
    $temp.remove();
    Swal.fire({
        icon: 'success',
        title: 'با موفقیت انجام شد...',
        text: 'لینک کپی شد!'
    })
    // alert('copy')
})


$('.shareTwitterBtn').click(function () {
    let url = $('#shareLinkInput').val();
    let twitterUrl = `https//:twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
});

// Share on Facebook
$('.shareFacebookBtn').click(function () {
    let url = $('#shareLinkInput').val();
    let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
});

// Share on WhatsApp
$('.shareWhatsAppBtn').click(function () {
    let url = $('#shareLinkInput').val();
    let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
});

$(function () {
    $('#time-btn').countdown({
        year: 2024, // YYYY Format
        month: 12, // 1-12
        day: 12, // 1-31
        hour: 12, // 24 hour format 0-23
        minute: 12, // 0-59
        second: 12, // 0-59
        dir:rtl,
    });
});
$(function () {
    $('#countdown').countdown({
        timezone: -6
    });
});
$(function () {

    $('#countdown').countdown({
        labels: true
    });

});

AOS.init();

