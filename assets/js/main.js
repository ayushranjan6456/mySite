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


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 