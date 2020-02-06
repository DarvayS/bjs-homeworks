const values = document.querySelectorAll('span.rotator__case');
let currIndex = 0;
let test = 0;

const rotation = function() {
  values[currIndex].classList.remove('rotator__case_active');
  if (currIndex >= values.length - 1) {
    currIndex = 0;
    values[currIndex].classList.add('rotator__case_active');
  }
  else {
    currIndex = currIndex + 1;
    values[currIndex].classList.add('rotator__case_active')
  }
}

const timer = setInterval(rotation, 1000);

const timer2 = setInterval(rotation, 1500);
