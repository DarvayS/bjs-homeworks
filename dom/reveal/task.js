const elemList = document.querySelectorAll('div.reveal');

const isInViewport = function(element){
  for (let i = 0; i < elemList.length; i++) {
    const viewportHeight = window.innerHeight;
    const elementTop = elemList[i].getBoundingClientRect().top;
    const elementBottom = elemList[i].getBoundingClientRect().bottom;
    if ((elementTop < viewportHeight & elementTop > 0 ) | (elementBottom < viewportHeight &  elementBottom > 0)) {
      elemList[i].classList.add('reveal_active');
    }
    else elemList[i].classList.remove('reveal_active');
  }
}

window.addEventListener('scroll', isInViewport);