const modal = document.querySelector('.modal-wrapper');
const buildSold = document.querySelector('.build-item');
const closeBtn = document.querySelector('.closed')

buildSold.addEventListener('click', () => modal.classList.add('show'))
closeBtn.addEventListener('click', () => modal.classList.remove('show'))