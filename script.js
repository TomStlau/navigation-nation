const menuBars = document.querySelector('.menu-bars')
const overlay = document.querySelector('.overlay')
const nav1 = document.querySelector('#nav-1')
const nav2 = document.querySelector('#nav-2')
const nav3 = document.querySelector('#nav-3')
const nav4 = document.querySelector('#nav-4')
const nav5 = document.querySelector('#nav-5')
const navs = [nav1, nav2, nav3, nav4, nav5]

// Functions

function changeNavSlide () {
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.remove('overlay-slide-left')
    overlay.classList.add('overlay-slide-right')
    for (navElement of navs) {
      navElement.classList.remove(`slide-out-${navs.indexOf(navElement) + 1}`)
      navElement.classList.add(`slide-in-${navs.indexOf(navElement) + 1}`)
    }
  } else {
    overlay.classList.remove('overlay-slide-right')
    overlay.classList.add('overlay-slide-left')
    for (navElement of navs) {
      navElement.classList.remove(`slide-in-${navs.indexOf(navElement) + 1}`)
      navElement.classList.add(`slide-out-${navs.indexOf(navElement) + 1}`)
    }
  }
}
function toggleNav () {
  menuBars.classList.toggle('change')
  overlay.classList.toggle('overlay-active')
  changeNavSlide()
}

// Event listeners

menuBars.addEventListener('click', toggleNav)
for (nav of navs) {
  nav.addEventListener('click', toggleNav)
}
