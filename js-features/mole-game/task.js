let counterKilled = document.getElementById("dead");
let counerMissed = document.getElementById("lost");

document.getElementsByClassName("hole-game")[0].addEventListener('click', (event) => {
  const { classList } = event.target;
  if (classList.contains('hole') && classList.contains('hole_has-mole')) {
    counterKilled.textContent = 1 + +(counterKilled.textContent);
    if (counterKilled.textContent > 9){
      alert("Вы победили");
      counterKilled.textContent = 0;
      counerMissed.textContent = 0;
    }
    
        }
  else {
    counerMissed.textContent = 1 + +(counerMissed.textContent);
    if (counerMissed.textContent > 4) {
      alert("Вы проиграли");
      counterKilled.textContent = 0;
      counerMissed.textContent = 0;
      }
    }
});