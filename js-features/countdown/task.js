let currentCount; 

let counter = setTimeout(function count() {
  currentCount = document.getElementById("timer");
  if (currentCount.textContent > 0) {
    currentCount.textContent -= 1;
    counter = setTimeout(count, 500);
  }
  else alert('Вы победили в конкурсе');

  }, 1000);
  
  
  counter;