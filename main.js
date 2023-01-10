//! nav bar -----------------------

let open_nav = document.querySelector(".open-nav");
let cancel_nav = document.querySelector(".cancel-nav");
let nav_bar = document.querySelector("nav")

open_nav.addEventListener("click", () => {
  open_nav.style.display = 'none'
  cancel_nav.style.display = 'block'
  nav_bar.style.display = 'block'
})
cancel_nav.addEventListener("click", () => {
  open_nav.style.display = 'block'
  cancel_nav.style.display = 'none'
  nav_bar.style.display = 'none'
})

// !scroll down and changing the color of the nav bar 
// !top the top button -----------
let header = document.querySelector("header")
let toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
  if (window.scrollY >= 535) {
    header.style.cssText = `background-color: black;`
    toTop.style.display = 'flex'
  } else {
    header.style.cssText = `background-color: none;`
    toTop.style.display = 'none'
  }
})


// !top the top button-----------
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})


// !menu -------------------------
let menuBut = document.querySelector('#menuBut')
let backToHome = document.querySelector('#backToHome')
let menuList = document.querySelector('.menu-list')

let allSections = document.querySelectorAll('.all-sections')


menuBut.addEventListener("click", () => {

  allSections.forEach((e) => {
    e.style.display = 'none'
  })
  menuList.style.display = 'block'
  menuList.scrollIntoView({ behavior: 'smooth' }, true);
})
backToHome.addEventListener("click", () => {

  allSections.forEach((e) => {
    e.style.display = 'block'
  })
  menuList.style.display = 'none'
})