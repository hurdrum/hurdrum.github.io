// tv and reviews sliders
const tv_slider = document.querySelector(".tv-content")
const rv_slider = document.querySelector(".rv-content")

const tp_btn = document.querySelector('.tv-prev-arrow')
tp_btn.addEventListener('click', prevSlideTv)

const tn_btn = document.querySelector('.tv-next-arrow')
tn_btn.addEventListener('click', nextSlideTv)

const rp_btn = document.querySelector('.rv-prev-arrow')
rp_btn.addEventListener('click', prevSlideRv)

const rn_btn = document.querySelector('.rv-next-arrow')
rn_btn.addEventListener('click', nextSlideRv)

let max_tv_translate = -762
let max_rv_translate = -254

const mobile = window.screen.width <= 770
if (mobile) {
    max_tv_translate = -1270
    max_rv_translate = -762
}

window.addEventListener('resize', winSize)
function winSize() {
    const mobile = window.screen.width <= 770
    if (mobile) {
        max_tv_translate = -1270
        max_rv_translate = -762
    } else {
        max_tv_translate = -762
        max_rv_translate = -254
    }
    console.log(mobile)
}

function tvSliderTranslate(num) {
    tv_slider.style.transform = `translateX(${num}px)`
}
function rvSliderTranslate(num) {
    rv_slider.style.transform = `translateX(${num}px)`
}

let tv_y = 0
let rv_y = 0

function prevSlideTv() {
    tv_slider.style.transition = `1s`
    if (tv_y >= 0) {
        tv_y = max_tv_translate
        tvSliderTranslate(tv_y)
    } else {
        tv_y += 254
        tvSliderTranslate(tv_y)
    }
}

function nextSlideTv() {
    tv_slider.style.transition = `1s`
    if (tv_y == max_tv_translate) {
        tv_y = 0
        tvSliderTranslate(tv_y)
    } else {
        tv_y -=254
        tvSliderTranslate(tv_y)
    }
}

function prevSlideRv() {
    rv_slider.style.transition = `1s`
    if (rv_y >= 0) {
        rv_y = max_rv_translate
        rvSliderTranslate(rv_y)
    } else {
        rv_y += 254
        rvSliderTranslate(rv_y)
    }
}

function nextSlideRv() {
    rv_slider.style.transition = `1s`
    if (rv_y == max_rv_translate) {
        rv_y = 0
        rvSliderTranslate(rv_y)
    } else {
        rv_y -=254
        rvSliderTranslate(rv_y)
    }
}


let touchStart = null
let touchPosition = null

tv_slider.addEventListener("touchstart", function(e) {
    touchStart = e.changedTouches[0].clientX
    tv_slider.style.transition = ''
})

tv_slider.addEventListener("touchmove", function(e) {
    touchPosition = e.changedTouches[0].clientX
    sdvig = (touchPosition - touchStart)/20
    tv_y += sdvig
    if (tv_y > 0) {
        tv_y = 0
    }
    if (tv_y < max_tv_translate) {
        tv_y = max_tv_translate
    }
    tvSliderTranslate(tv_y)
})

tv_slider.addEventListener("touchend", function() {
    touchStart = null
    touchPosition = null
})

rv_slider.addEventListener("touchstart", function(e) {
    touchStart = e.changedTouches[0].clientX
    rv_slider.style.transition = ``
})

rv_slider.addEventListener("touchmove", function(e) {
    touchPosition = e.changedTouches[0].clientX
    sdvig = (touchPosition - touchStart)/20
    rv_y += sdvig
    if (rv_y > 0) {
        rv_y = 0
    }
    if (rv_y < max_rv_translate) {
        rv_y = max_rv_translate
    }
    rvSliderTranslate(rv_y)
})

rv_slider.addEventListener("touchend", function() {
    touchStart = null
    touchPosition = null
})

// stars slider
const stars_slider = document.querySelector(".stars-content")

function stSliderTranslate(num) {
    stars_slider.style.transform = `translateX(${num}px)`
}

let max_stars_translate = -3096
let st_y = 0

const stp_btn = document.querySelector('.stars-prev-arrow')
stp_btn.addEventListener('click', function() {
    stars_slider.style.transition = `1s`
    if (st_y >= 0) {
        st_y = max_stars_translate
        stSliderTranslate(st_y)
    } else {
        st_y += 344
        stSliderTranslate(st_y)
    }
})

const stn_btn = document.querySelector('.stars-next-arrow')
stn_btn.addEventListener('click', function() {
    stars_slider.style.transition = `1s`
    if (st_y == max_stars_translate) {
        st_y = 0
        stSliderTranslate(st_y)
    } else {
        st_y -=344
        stSliderTranslate(st_y)
    }
})

let touchStartSt = null
let touchPositionSt = null

let sdvigOld = -1

stars_slider.addEventListener("touchstart", function(e) {
    touchStartSt = e.changedTouches[0].clientX
    stars_slider.style.transition = ''
})

stars_slider.addEventListener("touchmove", function(e) {
    touchPositionSt = e.changedTouches[0].clientX
    sdvig = (touchPositionSt - touchStartSt)/20
    st_y += sdvig
    if (st_y > 0) {
        st_y = 0
    }
    if (st_y < max_stars_translate) {
        st_y = max_stars_translate
    }
    stSliderTranslate(st_y)
})

stars_slider.addEventListener("touchend", function(e) {
    touchStartSt = null
    touchPositionSt = null
})

// audience slider 
const aud_slider = document.querySelector(".aud-cards-block")

function audSliderTranslate(num) {
    aud_slider.style.transform = `translateX(${num}px)`
}

const max_aud_translate = -645
let aud_y = 0

const audp_btn = document.querySelector('.aud-prev-arrow')
audp_btn.addEventListener('click', function() {
    aud_slider.style.transition = `1s`
    if (aud_y >= 0) {
        aud_y = max_aud_translate
        audSliderTranslate(aud_y)
    } else {
        aud_y += 215
        audSliderTranslate(aud_y)
    }
})

const audn_btn = document.querySelector('.aud-next-arrow')
audn_btn.addEventListener('click', function() {
    aud_slider.style.transition = `1s`
    console.log(aud_y)
    if (aud_y == max_aud_translate) {
        aud_y = 0
        audSliderTranslate(aud_y)
    } else {
        aud_y -=215
        audSliderTranslate(aud_y)
    }
})