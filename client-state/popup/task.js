try {
  var alreadyAsked = localStorage.getItem('isAskedToSubscribe');
}
catch {
  localStorage.setItem('isAskedToSubscribe', 'no');
  var alreadyAsked = 'no';
};
let modal = document.getElementById('subscribe-modal');

window.onload = function() {
  if (alreadyAsked != 'yes') {
    modal.classList.add('modal_active');
    localStorage.setItem('isAskedToSubscribe', 'yes');
  }
}

let closeButton = document.querySelector('.modal__close').addEventListener('click', () => {
  modal.classList.remove('modal_active');
})
