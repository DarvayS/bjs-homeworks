try {
  var user_id = localStorage.getItem('user_id');
}
catch {
};

if (!user_id) {
  document.getElementById('signin').classList.add('signin_active');
} else {
  document.getElementById('welcome').classList.add('welcome_active');
  document.getElementById('user_id').innerHTML = user_id;
}

let form = document.getElementById('signin__form');
let response = {};

document.getElementById('signin__btn').addEventListener('click', (e) => {
  let formData = new FormData(signin__form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(formData);
  e.preventDefault();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      response = JSON.parse(xhr.responseText);
      if (response.user_id) {
        document.getElementById('signin').classList.toggle('signin_active');
        document.getElementById('welcome').classList.add('welcome_active');
        localStorage.setItem('user_id', response.user_id);
        document.getElementById('user_id').innerHTML = response.user_id;
      } else alert('неверные данные');
    }; 
  };
});
