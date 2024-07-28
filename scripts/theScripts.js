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


let modalShow = false;
window.onscroll = function () {
    let modal = document.getElementById("overlay")
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let scrollPosition = window.scrollY || window.pageXOffset || document.documentElement.scrollTop;

    if (modalShow===false&&scrollPosition > (documentHeight - windowHeight) / 2) {
        modal.style.display = "flex";
        modalShow = true;
    }
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none'
}


AOS.init();

