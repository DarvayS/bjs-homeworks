let currFont = document.querySelector('.font-size_active');
const fonts = document.querySelectorAll('a.font-size');
const content = document.querySelector('.book__content');

const changeFont = function(event) {
  font = event.target;
  currFont.classList.remove('font-size_active');
  currFont = font;
  currFont.classList.add('font-size_active');
  event.preventDefault();
  content.classList.remove('font-size_small', 'font-size_big');
  if (font.dataset.size === 'big'){
    content.classList.add('font-size_big');
  }
  else if (font.dataset.size === 'small') {
    content.classList.add('font-size_small');
  }
  
}

fonts.forEach(function(font){
  font.addEventListener('click', changeFont);
});