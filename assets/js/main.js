/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

const hideMenu = () => {
  navMenu.classList.remove('show-menu');
}

if(navClose){
  navClose.addEventListener('click', () => {
    hideMenu();
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(item => item.addEventListener('click', hideMenu))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let classes = this.parentNode.className;

  for(i=0; i<skillsContent.length; i++)
    skillsContent[i].className='skills__content skills__close'

  if(classes === 'skills__content skills__close'){
    this.parentNode.className='skills__content skills__open'
  }
}
skillsHeader.forEach(element => {
  element.addEventListener('click', toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab=>{
      tab.classList.remove('qualification__active')
    })

    tab.classList.add('qualifications__active')
  })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 