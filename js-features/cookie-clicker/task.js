let currentCount = document.getElementById("clicker__counter");
let currentCookie = document.getElementById("cookie");


cookie.onclick = function() {
  currentCount.textContent = 1 + +(currentCount.textContent);
  if (currentCookie.width == "200") {
    currentCookie.width = "220";
  }
  else currentCookie.width = "200"
};