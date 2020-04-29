const inc = document.querySelectorAll('.product__quantity-control_inc');
const dec = document.querySelectorAll('.product__quantity-control_dec');
const carts = document.querySelectorAll('div.product__add');
const cart = document.querySelector('div.cart__products');


const incHandler = function(event) {
  let val = event.target;
  val.previousElementSibling.textContent = +(val.previousElementSibling.textContent) + 1;
}

const decHandler = function(event) {
  let val = event.target;
  if (val.nextElementSibling.textContent > 0)
    val.nextElementSibling.textContent = +(val.nextElementSibling.textContent) - 1; 
}

const addProduct = function(event) {
  let newCart = event.target;
  let curProduct = newCart.closest('div.product');
  let newProd = document.createElement('div');
  newProd.className = "cart__product";
  newProd.dataset.id = curProduct.dataset.id;
  newProd.innerHTML = '<img class="cart__product-image" src=' 
  + curProduct.querySelector('.product__image').src + 
  '> <div class="cart__product-count">'
   + +(curProduct.querySelector('.product__quantity-value').textContent) +'</div>';
   
  let alreadyExist = 0;
  if (curProduct.querySelector('.product__quantity-value').textContent != "0") {
    for (i = 0; i < cart.children.length; i++) {
      if (cart.children[i].dataset.id === curProduct.dataset.id) {
        alreadyExist = 1;
        break;
      }
    }
    if (alreadyExist === 0) {
      cart.appendChild(newProd);
    }
    else {
      cart.children[i].querySelector('.cart__product-count').textContent = +cart.children[i].querySelector('.cart__product-count').textContent + +(curProduct.querySelector('.product__quantity-value').textContent);
    }
  }
}

inc.forEach(function(val) {
  val.addEventListener('click', incHandler);
})

dec.forEach(function(val) {
  val.addEventListener('click', decHandler);
})

carts.forEach(function(newCart) {
  newCart.addEventListener('click', addProduct)
})