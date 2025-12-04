document.addEventListener('DOMContentLoaded', function () {
    // Hero Slider
    let homeSlider = new Swiper(".homeSlider", {
        slidesPerView: 1,    // Mobile default
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        breakpoints: {
            // Mobile (0px - 575px)
            0: {
                slidesPerView: 1,
            },

            // Tablet (576px - 991px)
            576: {
                slidesPerView: 2,
            },

            // Laptop (992px - 1199px)
            992: {
                slidesPerView: 2.5,
            },

            // Desktop (1200px+)
            1200: {
                slidesPerView: 2.5,
            },
        }
    });

    // services slider
    const Servicesswiper = new Swiper('.servicesSwiper', {
        // loop: true,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 400,
        // autoplay: true,
        grabCursor: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        },

        // Custom navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        }
    });


    // showCaseSwiper slider
    let showCaseSwiper = new Swiper(".showCaseSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Different slider
    let differentSwiper = new Swiper(".features-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-pre",
        },
    });

    // process slider
    const processID = document.querySelector(".process-swipper");
    if (processID) {
        let processSwiper = new Swiper(".process-swipper", {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3.4,
                },
                1400: {
                    slidesPerView: 4.2,
                },
            }, navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

});