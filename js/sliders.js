// tariffs slider
if (screen.width < 770) {
    const audSlider = new Swiper('.tariffs-slider-window', {
        loop: true,
        spaceBetween: 100,
        speed: 700,
        initialSlide: 1
    })
}

// audience slider 
if (screen.width < 770) {
    const audSlider = new Swiper('.aud-slider-window', {
        loop: true,
        spaceBetween: 20,
        speed: 700,
        navigation: {
            prevEl: '.aud-prev-arrow',
            nextEl: '.aud-next-arrow',
        },
    })
}

// stars slider 
if (screen.width < 770) {
    const starsSlider = new Swiper('.stars-slider-window', {
        loop: true,
        spaceBetween: 100,
        speed: 700,
        navigation: {
            prevEl: '.stars-prev-arrow',
            nextEl: '.stars-next-arrow',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
        },
    })
}

// tv and rewievs sliders
let slidesNumber = 3;
let firstSlide = 0;
if (screen.width < 770) {
    slidesNumber = 1.5;
    firstSlide = 1;
}
new Swiper('.tv-slider-window', {
    spaceBetween: 20,
    loop: true,
    speed: 700,
    initialSlide: firstSlide,
    slidesPerView: slidesNumber,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});