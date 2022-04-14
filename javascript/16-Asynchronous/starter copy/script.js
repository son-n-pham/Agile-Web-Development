'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// OLD SCHOOL OF USING AJAX IN JS

const renderCountry = function (data, className = '') {
  const html = `
	<article class="country ${className}">
		<img class="country__img" src="${data.flags.svg}" />
		<div class="country__data">
			<h3 class="country__name">${data.name.official}</h3>
			<h4 class="country__region">${data.region}</h4>
			<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
        1
      )} Million People</p>
			<p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)]
      }</p>
			<p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
		</div>
	</article>
	`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   // AJAX call  country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   // When request is sent, it is fetching the data
//   // event listener is used to fire the function when the fetching/loading is completed
//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText)[0];
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // get neighbour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call  country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText)[0];
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryData('usa');

// MODERN WITH FETCH
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const renderError = function (errMessage) {
  countriesContainer.insertAdjacentText('beforeend', `${errMessage}`);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errMessage} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🤦‍♂️🤦‍♂️🤦‍♂️`);
      renderError(`Something went wrong 🤦‍♂️🤦‍♂️🤦‍♂️ ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country ${country} not found`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🤦‍♂️🤦‍♂️🤦‍♂️`);
//       renderError(`Something went wrong 🤦‍♂️🤦‍♂️🤦‍♂️ ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
btn.addEventListener('click', e => getCountryData('portugal'));
// getCountryData('dafds');

// Promise is a special object with on one parameter of funciton
// That function as 2 functions of resolve and reject as its parameters
// resolve is the function that the promise is fulfilled
// and the return of resolve is consumed by then handler.
// reject is the function that the promise is rejected, which then
// can be handled with catch handler

// Promisifying is the process to convert callback-based behaviour into promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('YOU WIN');
    } else {
      reject(new Error('YOU LOSE'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));
