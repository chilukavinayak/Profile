/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader(){
  const header = document.querySelector('.header');
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*===== SHOW SCROLL UP =====*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); 
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*===== PROJECT FILTERING (Optional) =====*/
const projectsItems = document.querySelectorAll('.projects__item');
const projectsContents = document.querySelectorAll('.projects__content');

projectsItems.forEach(item => {
  item.addEventListener('click', () => {
    // remove current active
    projectsItems.forEach(i => i.classList.remove('active-project'));
    item.classList.add('active-project');

    let filterValue = item.getAttribute('data-filter');
    projectsContents.forEach(content => {
      if(filterValue === 'all') {
        content.style.display = 'block';
      } else {
        if(content.classList.contains(filterValue.substring(1))) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      }
    });
  });
});
