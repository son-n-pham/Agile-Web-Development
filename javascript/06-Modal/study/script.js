'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const clickToToggle = function (target) {
  target.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  clickToToggle(btnsOpenModal[i]);
  clickToToggle(btnCloseModal);
}

// Key from keyboard does not belong to any item, and needs to be access from document
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
