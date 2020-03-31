const elems = document.querySelectorAll('a.has-tooltip');

elems.forEach(function(elem) {
  elem.insertAdjacentHTML('beforeend','<div class="tooltip" style="left: ' + elem.getBoundingClientRect().x + 'px; top: ' + (+(elem.getBoundingClientRect().y) + +(elem.getBoundingClientRect().height) + 
  +(pageYOffset))+ 'px;" >'+elem.title+'</div>');

});

const tooltipHandler = function() {
  const elem = event.target;
  elem.querySelector('.tooltip').classList.toggle('tooltip_active');
  event.preventDefault();
}

elems.forEach(function(elem) {
  elem.addEventListener('click', tooltipHandler);
});

document.querySelectorAll('div.tooltip').forEach(function(tooltip) {
  tooltip.addEventListener('click', (event) => {
    event.preventDefault();
  })
})