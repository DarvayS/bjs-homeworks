const progress = document.getElementById('progress');

let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest()
  xhr.upload.addEventListener("progress", function (event) {
    progress.value = event.loaded / event.total;
  });
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  
  e.preventDefault();
});