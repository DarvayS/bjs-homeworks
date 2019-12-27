document.querySelector('#modal_main').style.display = 'flex';

document.querySelectorAll('.modal__close')[0].addEventListener('click', (event) => {
  document.querySelector('#modal_main').style.display = '';
  
});

document.querySelectorAll('.modal__close')[2].addEventListener('click', (event) => {
  document.querySelector('#modal_success').style.display = 'none';
  
  
});

document.querySelector('.show-success').addEventListener('click', (event) => {
  document.querySelector('#modal_success').style.display = 'flex';
  document.querySelector('#modal_main').style.display = '';
  
});