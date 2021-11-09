$(document).ready(function () {
  $(".customer-list").slick({
    accessibility: true,
    autoplay: true,
    speed: 300,
    dots: true,
    draggable: true,
  });
});

// Toggle-menu
const toggleMenu = document.querySelector('.header-toggle');
const menuBG = document.querySelector('.header-menu__bg')
const headerMenu = document.querySelector('.header-menu');
const headerMenuClose = document.querySelector('.header-menu__close');
const menuItem = document.querySelector('.header-menu__link')

toggleMenu.addEventListener('click', handleToggleMenu);
function handleToggleMenu(){
  menuBG.classList.add('is-active');
  headerMenu.classList.add('is-active');
}

headerMenuClose.addEventListener('click', handleCloseMenu);
function handleCloseMenu(){
  menuBG.classList.remove('is-active');
  headerMenu.classList.remove('is-active');
}

menuItem.addEventListener('click', function(){
  console.log('menuItem')
  menuBG.classList.remove('is-active');
  headerMenu.classList.remove('is-active');
});