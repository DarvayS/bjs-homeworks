const tabsMenu = document.querySelectorAll('div.tab');
const arrOfTabsMenu = Array.from(tabsMenu);
const tabsContent = document.querySelectorAll('div.tab__content');


let currIndex = arrOfTabsMenu.indexOf(document.querySelector('div.tab.tab_active'));

const tabsHandler = function(event) {
  const tab = event.target;
  tabsMenu[currIndex].classList.remove('tab_active');
  tabsContent[currIndex].classList.remove('tab__content_active');
  tab.classList.toggle('tab_active');
  currIndex = arrOfTabsMenu.indexOf(document.querySelector('div.tab.tab_active'));
  tabsContent[currIndex].classList.add('tab__content_active');
  tabsMenu[currIndex].classList.add('tab_active');

  
}

tabsMenu.forEach(function(tab){
  tab.addEventListener('click', tabsHandler);
})