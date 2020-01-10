const slides = document.querySelectorAll('div .slider__items .slider__item');

document.querySelector('.slider__arrow.slider__arrow_next').addEventListener('click', (event) => {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('slider__item_active')) {
      if (i == (slides.length - 1)) {
        slides[i].classList.remove('slider__item_active');
        slides[0].classList.add('slider__item_active');
        break;
      }
      else {
        slides[i].classList.remove('slider__item_active');
        slides[i+1].classList.add('slider__item_active');
        break;
      }
    }
  
}});


document.querySelector('.slider__arrow.slider__arrow_prev').addEventListener('click', (event) => {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('slider__item_active')) {
      if (i == 0) {
        slides[i].classList.remove('slider__item_active');
        slides[slides.length - 1].classList.add('slider__item_active');
        break;
      }
      else {
        slides[i].classList.remove('slider__item_active');
        slides[i-1].classList.add('slider__item_active');
        break;
      }
    }
  
}});
