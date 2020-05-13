const progress = document.getElementById( 'progress' );
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  xhr.onprogress = function(event) {
    console.log(event.lengthComputable);
    if (event.lengthComputable) {
      progress.value = (event.loaded/event.total);
    }
  }
  e.preventDefault();
});





