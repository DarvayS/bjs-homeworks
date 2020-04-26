const items = document.querySelector('#items');
let newCurrency;
let response;


let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    response = xhr.responseText;
    document.querySelector('#loader').classList.remove('loader_active');
    response = JSON.parse(response);
    response = Object.values(response.response.Valute);
    currencies();
  }; 
};

const currencies = function() {
  for (i = 0; i < response.length; i++) {
    newCurrency = document.createElement('div');
    newCurrency.className = ('item');
    newCurrency.innerHTML = '<div class="item__code">' + response[i].CharCode + '</div> <div class="item__value">'  + response[i].Value + '</div><div class="item__currency">руб.</div>';
    items.appendChild(newCurrency);
  }
};