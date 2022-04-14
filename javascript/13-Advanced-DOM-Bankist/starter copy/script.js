'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// COOKIES

// console.log(document.documentElement);
// console.log(document.querySelectorAll('section'));
// const buttons = document.querySelectorAll('button');
// console.log(buttons);
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

const header = document.getElementsByTagName('header')[0];
// console.log(header);

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved funtionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// This setting up inline style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// // Get all styles of element by using getComputedStyle
// console.log(getComputedStyle(message));

// // Get current height of message element
// console.log(getComputedStyle(message).height);

// Adjust the height of message element
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// console.log(document.documentElement.style);

// // Attributes
// const logo = document.querySelector('.nav__logo');

//////////////////////////////////////////
// Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // getBoundingClientReact() gives the attributes
  // of the element relatively to the current window
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords.top);

  // // window.pageXOffset, windown.pageXOffset and pageYOffset is being legacy
  // // New one is scrollX and scrollY
  // // This is to have the coordinate of the window
  // // We need to combine the coordinate of the window and the position of element to window
  // // to have the absolute position of the element.
  // const windowPageXOffset = window.pageXOffset;
  // const windowPageYOffset = window.pageYOffset;
  // let [scrollX, scrollY] = [window.scrollX, window.scrollY];
  // console.log(
  //   'Current scroll scrollX, scrollY: ',
  //   window.scrollX,
  //   window.scrollY
  // );
  // console.log(`scrollX, scrollY is ${scrollX},scroll ${scrollY}`);

  // // Viewport height and width
  // console.log(
  //   `Height/width of viewport: ${document.documentElement.clientHeight} ${document.documentElement.clientWidth}`
  // );

  // Scrolling: OLD SCHOOL
  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);
  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: 'smooth',
  // });

  // Scrolling: MODERN
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////
// WORKING WITH EVENTS
// const h1 = document.querySelector('h1');

// // MORE MODERN, MORE THAN ONE EVENT LISTENER CAN BE ASSIGN TO AN ELEMENT
// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener for mouseenter is working.');
// // });

// // Direct access to mouse enter event
// // OLD SCHOOL
// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter for mouseenter event');
// // };

// // Doing this to add and remove event listener
// const alertH1 = function () {
//   alert('addEventListener for mouseenter is working.');
//   // Remove after the alert
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// // Set time to remove the event listener
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// ///////////////////////////???????///////////////////
// // Event Capturing, Babbling, Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor);

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget, this);

//   // Stop propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget, this);
// });

// // By default, event is captured during babbling state
// // We can add true to capture even in the capturing state
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget, this);
//   },
//   true
// );

/////////////////////////////////////////////////////////////
// Page Navigation

// This is not a efficient solution as we have 3 eventListeners
// If we have thousands of item, performances will be significantly impacted.
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // Disable anchor of href
//     const id = this.getAttribute('href');
//     document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
//     console.log(id);
//   });
// });

// Better approach
// 1. Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // 2. Determine what element originated the event
  // These technique applied the Babbling above
  e.preventDefault();
  // Using If to prevent clicking outside a tag
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // e.target to catch where the click happened
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////
// DOM Traversing
// const h1 = document.querySelector('h1');

// // Going downwards: child
// // Select all children with a specific class
// console.log(h1.querySelectorAll('.highlight'));
// // Select all child nodes
// console.log(h1.childNodes);
// // Selection all direct children in HTMLCollection
// console.log(h1.children);
// // First child
// h1.firstElementChild.style.color = 'white';
// // Last child
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(
//   (h1.closest('.header').style.background = 'var( --gradient-primary)')
// );

// // Going sideway: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el != h1) el.style.backgroundColor = 'red';
// });

//////////////////////////////////////////////////////////////
// Tabbed Component
const operation_btns = document.querySelector('.operations__tab-container');
// console.log(operation_btns);

// operation_btns.forEach(function (el) {
//   el.addEventListener('click', function(e){

//   })
// });

// Catch the click event from children
operation_btns.addEventListener('click', function (e) {
  // Using closest to get the button when clicking button or its span
  const clicked = e.target.closest('.operations__tab');

  // Using if to ensure no error when clicking outside the buttons
  // if (clicked.classList.contains('operations__tab')) {
  if (!clicked) return;
  // Remove operation__tab--active
  document
    .querySelector('.operations__tab--active')
    .classList.remove('operations__tab--active');
  // Remove operations__content--active
  document
    .querySelector('.operations__content--active')
    .classList.remove('operations__content--active');

  // const workList = clicked.classList;

  // This is to get the tab num from a string
  // const tabNum = workList[2][workList[2].length - 1];

  // workList.add('operations__tab--active');

  // Extract number of data-tab
  const tabNum = clicked.dataset.tab;
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${tabNum}`)
    .classList.add('operations__content--active');
});

// Menu fading animation
const nav = document.querySelector('.nav');
// const reduced_opacity = 0.5;
// const handleHover1 = function (hoverAction) {
//   let opacity = 1;
//   if (hoverAction === 'mouseover') opacity = reduced_opacity;
//   console.log(reduced_opacity);
//   console.log(opacity);
//   nav.addEventListener(hoverAction, function (e) {
//     if (e.target.classList.contains('nav__link')) {
//       const link = e.target;
//       const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//       const logo = link.closest('.nav').querySelector('img');
//       siblings.forEach(el => {
//         if (el !== link) el.style.opacity = opacity;
//       });
//       logo.style.opacity = opacity;
//     }
//   });
// };

// handleHover1('mouseover');
// handleHover1('mouseout');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// bind is used have the copy of handleHover function.
// bind parameter or [parameters] is passed to function,
// and function can use that parameter via this
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////
// Sticky navigation

// Function is fired when the observed target intersects the root at the threshold.
// entries is the array of threshold entries
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOption = {
//   root: null, // Entire viewport
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);

// const header1 = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/////////////////////////////////////////////
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.9,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
// imgTargets.forEach(function (image) {
//   imgObserver.observe(image);
// });

////////////////////////////////////////////////////
// Slider
const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3)';
// slider.style.overflow = 'visible';

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

const goToSlide = function (curSlide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - curSlide) * 100}%)`)
  );
};

let curSlide = 0;

const dotContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide=${i}></button>`
    );
  });
};

createDots();

const activateDot = function (curSlide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${curSlide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(curSlide);

goToSlide(curSlide);
// activateDot(curSlide);
// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

const nextSlide = function () {
  if (curSlide < slides.length - 1) curSlide++;
  else curSlide = 0;
  goToSlide(curSlide);
  activateDot(curSlide);
  // slides.forEach(
  //   (s, i) => (s.style.transform = `translateX(${(i - curSlide) * 100}%)`)
  // );
};

const prevSlide = function () {
  if (curSlide > 0) curSlide--;
  else curSlide = slides.length - 1;
  goToSlide(curSlide);
  activateDot(curSlide);
  // slides.forEach(
  //   (s, i) => (s.style.transform = `translateX(${(i - curSlide) * 100}%)`)
  // );
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();

  console.log(e);
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    curSlide = e.target.dataset.slide;
    goToSlide(curSlide);
    activateDot(curSlide);
  }
});
