// Missions Initiatives Box Hidden on Expand
const mission_card = document.querySelectorAll('.mission-card')

mission_card.forEach(item => {
    item.addEventListener('click', e => {
        e.target.parentElement.children[1].style.transition = '.5s all ease-in-out'
        if(e.target.parentElement.classList.contains('collapsed')) {
            e.target.parentElement.children[1].style.transform = 'translateX(0)'
        } else {
            e.target.parentElement.children[1].style.transform = 'translateX(' + (e.target.parentElement.children[1].offsetWidth + 1) + 'px)'
        }

        (() => {
            const collapsedEl = document.querySelectorAll('.mission-card.collapsed')

            collapsedEl.forEach(cEl => {
                cEl.children[1].style.transform = 'translateX(0)'
            })
        })()
    })
})

// About Page Tab
const international_tab_btn = document.getElementById('international-tab')
const national_tab_btn = document.getElementById('national-tab')
const international_tab = document.getElementById('international')
const national_tab = document.getElementById('national')

national_tab.style.display = 'none'
international_tab.style.display = 'block'

international_tab_btn.addEventListener('click', () => {
    national_tab.style.display = 'none'
    international_tab.style.display = 'block'
})
national_tab_btn.addEventListener('click', () => {
    national_tab.style.display = 'block'
    international_tab.style.display = 'none'
})



$(document).ready(function () {
    $('.modal').on('hidden.bs.modal', function (event){
        let iframes = event.target.getElementsByTagName('iframe');
        for (let i = 0; i < iframes.length; i++) {
            let src_tmp = iframes[i].src;
            iframes[i].src = '';
            setTimeout(() => {
                iframes[i].src = src_tmp;
            }, 100);
        }
    });
    
    $('#international-partners-grid').slick({
        rows: 3,
        dots: false,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        infinite: true
                    }
                }, 
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 300,
                    settings: "unslick" // destroys slick
                }
            ],
    });
    
    $('#national-partners-grid').slick({
        rows: 3,
        dots: false,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        infinite: true
                    }
                }, 
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 300,
                    settings: "unslick" // destroys slick
                }
            ],
    });
});

// Portfolio Filter
$('.filter-btn').click(function () {
    const data_attr = $(this).attr('data-filter');

    if (data_attr == 'all') {
        $('.pub-box').show('1000')
    } else {
        $('.pub-box').not('.'+data_attr).hide('1000');
        $('.pub-box').filter('.'+data_attr).show('1000');
    }
});

$('.filter-btn').click(function () {
    $(this).addClass('filter-active').siblings().removeClass('filter-active');
});