document.querySelector('.dropdown').addEventListener('click', (event) => {
  document.querySelector('ul.dropdown__list').classList.toggle('dropdown__list_active');
})

const values = document.querySelectorAll('li.dropdown__item');
currValue = document.querySelector('div.dropdown__value');

const valueChooser = function(event) {
  Value = event.target;
  
  event.preventDefault();
  currValue.textContent = Value.textContent;
};


values.forEach(function(Value) {
  Value.addEventListener('click', valueChooser);
});


















