// display/hide mobile menu with click on btn
const hamburger = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".mobile-menu");

function menuDisplay() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu")
        hamburger.style.transform = 'scale(1)'
    }
    else {
        menu.classList.add("show-menu")
        hamburger.style.transform = 'scale(1.1)'
    }
}
hamburger.addEventListener("click", menuDisplay)

// hide mobile menu with click outside it or link
const nav_links = document.querySelectorAll('#nav-link')
document.onclick = function(e) {
    if ((!menu.contains(e.target) && !hamburger.contains(e.target))) {
        menu.classList.remove("show-menu")
        hamburger.style.transform = 'scale(1)'
    }
    for (let nav_link of nav_links) {
      if (nav_link.contains(e.target)) {
        menu.classList.remove("show-menu")
        hamburger.style.transform = 'scale(1)'
      }
    }
};

// display/hide header`s background while scrolling the page
const header = document.querySelector('header')

function onScroll() {
    var s = window.pageYOffset;
    if (s > 150) {
      header.classList.add("header-bg")
    } else {
      header.classList.remove("header-bg")
    }
}
window.addEventListener('scroll', onScroll)


// smooth transition to sections
// const nav_links = document.querySelectorAll('#nav-link')

for (let link of nav_links) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = link.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}