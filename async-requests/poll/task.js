let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
const poll = document.querySelector('.poll');

let response;
let answers;
let answer;

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    response = JSON.parse(xhr.responseText);
    pollStarter();
  }; 
};

const pollStarter = function() {
  document.getElementById('poll__title').textContent = response.data.title;
  answers = Object.values(response.data.answers);
  for (i = 0; i < answers.length; i++) {
    answer = document.createElement('button');
    answer.className = ('poll__answer');
    answer.textContent = answers[i];
    document.getElementById('poll__answers').appendChild(answer);
  }
  answers = document.querySelectorAll('.poll__answer');
  answers.forEach(function(a) {
    a.addEventListener('click', answerHandler);
  });
}

const asdf = function() {
  document.querySelector('.modal-container-enabled').className = 'modal-container-disabled' 
};

const answerHandler = function() {
  event.preventDefault();
  let a = event.target;
  let score = document.createElement('div');
  score.className = ('modal-container-enabled');
  score.innerHTML = `<div class="modal-block"> <span> Спасибо, ваш голос засчитан!</span> 
  <div class="modal-block-button" onclick = asdf(); > закрыть</div></div>`
  document.body.appendChild(score);
}

