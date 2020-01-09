const links = document.querySelectorAll('.menu .menu__link');

const menuHandler = function(event) {
  const link = event.target;
  const menuItem = link.closest('.menu__item');
  const subMenu = menuItem.querySelector('.menu_sub');
  
  if (subMenu) {
    event.preventDefault();
    
    subMenu.classList.toggle('menu_active');
  }
};

links.forEach(function(link) {
  link.addEventListener('click', menuHandler);
});