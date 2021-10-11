import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

document.addEventListener('DOMContentLoaded', () => {
  const basketButton = document.querySelector('#basket-button');
  const basket = document.querySelector('#basket');
  const continueShoppingButton = document.querySelector('#continue-shopping');
  const closeButton = document.querySelector('#close');
  const dimmer = document.querySelector('.dimmer');

  basketButton.addEventListener("click", () => {
    basket.classList.add('basket-visible');
    dimmer.classList.add('dim');
  });

  continueShoppingButton.addEventListener("click", () => {
    basket.classList.remove('basket-visible');
    dimmer.classList.remove('dim');
  });

  closeButton.addEventListener("click", () => {
    basket.classList.remove('basket-visible');
    dimmer.classList.remove('dim');
  });
});
