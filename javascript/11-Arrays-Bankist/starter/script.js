'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const createUsername = function(fullName) {
//   // const fullName = account1.owner;
//   return fullName.split(" ")
//                 .map(currentName => currentName[0].toLowerCase())
//                 .join("");
//   // console.log(username);
// }

// Shorter with arrow function
// const createUsername = fullName => {
//   // const fullName = account1.owner;
//   return fullName.split(" ")
//                 .map(currentName => currentName[0].toLowerCase())
//                 .join("");
//   // console.log(username);
// }

// console.log(createUsername(account1.owner));

// const accounts = [account1, account2, account3, account4];
const accounts = [account1, account2];

// Better version to create for all accounts
const createUsernames = function(accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .split(" ")
      // Then map for that new array, get the first letter of each item
      // and lower case it. Map give the new array.
      .map(currentName => currentName[0].toLowerCase())
      // join the new array to have each username
      .join("");
    })}

createUsernames(accounts);


// Elements 
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


///////////////////////////////
// Login
let currentAccount, timer;

btnLogin.addEventListener("click", function(e) {
  e.preventDefault();
  const inputUsername = inputLoginUsername.value;
  const inputPin = inputLoginPin.value;
  currentAccount = accounts.find(acc => acc.username === inputUsername);
  if (currentAccount?.pin === +inputPin){
    // Display UI
    displayUI(currentAccount);

    // Reset input login and pin to blank
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur();
    
    // Start logout timer
    if (timer) clearInterval(timer);
    timer = logOutTimer();
  };

})

btnTransfer.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("btnTransfer clicked");
  const amount = Number.parseFloat(inputTransferAmount.value);
  console.log(amount>0);
  const accReceiver = accounts.find(
    acc => acc.username === inputTransferTo.value);
  console.log(accReceiver);
  if (
    amount > 0 &&
    accReceiver &&
    currentAccount.balance >= amount &&
    accReceiver?.username !== currentAccount.username
  ) {
    // Clear transfer input
    inputTransferAmount.value = "";
    inputTransferTo.value = "";

    // Doing the transfer
    currentAccount.movements.push(-amount);
    accReceiver.movements.push(amount);

    // Update datetime
    const transferTime = new Date();
    currentAccount.movementsDates.push(transferTime.toISOString());
    accReceiver.movementsDates.push(transferTime.toISOString());
    
    displayUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = logOutTimer();
  }
})

btnLoan.addEventListener("click", function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov > amount*0.1)
  ) {
    // Update movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Reset input loan to blank
    inputLoanAmount.value = '';
    
    displayUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = logOutTimer();
  }

})


btnClose.addEventListener("click", function(e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log("CLOSE");
    const index = accounts.findIndex(acc => acc.username === inputCloseUsername.value);

    // Delete account
    accounts.splice(index, 1);

    // Lock screen
    containerApp.style.opacity = "0";

    // Reset input value to blank
    inputCloseUsername.value = inputClosePin = '';
  }
})

let sorted = false;
btnSort.addEventListener("click", function(e) {
  e.preventDefault;
  sorted = !sorted;
  displayMovements(movements, sorted);

})

///////////////////////////////////////////
const displayUI = function(acc) {
  // Update label welcome and UI
  // const now = new Date();
  // const day = `${now.getDate()}`.padStart(2,0);
  // const month = `${now.getMonth()+1}`.padStart(2,0);
  // const year = `${now.getFullYear()}`;
  // const hour = `${now.getHours()}`.padStart(2,0);
  // const min = `${now.getMinutes()}`.padStart(2,0);
  // labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`

  // Instead of the above, using language code table for date
  // http://www.lingoes.net/en/translator/langcode.htm
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  };

  const locale = navigator.language;

  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)
  
  labelWelcome.textContent = `Welcome back, ${acc.owner.split(" ")[0]}`;
  containerApp.style.opacity = "100";
  displayMovements(acc);
  // Update Summary
  calDisplaySummary(acc);
}


const displayMovements = function(acc, sort=false) {
  const movements = acc.movements;
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;
  movs.forEach(function(mov, i) {
    // assign value for type
    const type = mov>0 ? 'deposit' : 'withdrawal';
    // date of movement
    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2,0);
    const month = `${date.getMonth()+1}`.padStart(2,0);
    const year = `${date.getFullYear()}`;
    const displayDate = `${day}/${month}/${year}`;
    // have html variable to insert into the movements div
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>
    `;

    // It is a preferred way to create html
    // First, we just need to create html string as above
    // Then using this insertAdjacentHTML to insert the html into the file
    // insertAdjacentHTML allows to insert as sibling or child
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

// displayMovements(account1.movements)


const logOutTimer = function() {

  const tick = function(){
    const min = `${Math.floor(time/60)}`.padStart(2,0);
    const sec = `${time % 60}`.padStart(2,0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;


    // When 0 second, stop timer and log out user
    if (time===0) {
      // Stop setInterval
      clearInterval(timer);

      // logout
      containerApp.style.opacity = "0";
      labelWelcome.textContent = "Log in to get started"
    };

    // Decrease 1s
    time--;

  }


  // Set time to 5 minutes
  let time = 300;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000)
  return timer;
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


////////////////////////////////////////////////
// Movements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calDisplaySummary = function(account) {

  const totalDeposit = account.movements
    .filter(mov => mov >= 0)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumIn.textContent = `${totalDeposit.toFixed(2)}€`;


  const totalWithdraw = account.movements
    .filter(mov => mov<0)
    .reduce((acc, withdraw) => acc + withdraw,0);
  labelSumOut.textContent = `${Math.abs(totalWithdraw).toFixed(2)}€`;

  account.balance = totalDeposit + totalWithdraw;

  labelBalance.textContent = `${account.balance.toFixed(2)}€`;

  labelSumInterest.textContent = account.movements
    .filter(mov => mov>0)                                          
    .reduce((acc, mov)=> acc+mov*Number.parseFloat(account.interestRate/100),0)
    .toFixed(2);
};
// movements.map((mov, i, arr) => console.log(`Item ${i} of ${arr} is: ${mov}`))

// const euroToUSD = 1.1;

// const movementsEuro = movements.map(mov => mov*euroToUSD);

// console.log(movementsEuro);



/////////////////////////////////////////////////
// EXERCISE FOR ARRAY
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia, dogsKate) {
//   const dogsJuliaCorr = dogsJulia.slice(1,-1);
//   const dogsCombine = [...dogsJuliaCorr, ...dogsKate];
//   dogsCombine.forEach(function(dog, i){
//     const adultOrPuppy = dog >=3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${i+1} is an ${adultOrPuppy}, and is ${dog} years old.`);
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// MORE WAY TO CREATE AND FILLING ARRAY

console.log([1,2,3,4,5]);
console.log(new Array(1,2,3,4,5));

// Create array with 5 empty element
const x = new Array(5);
console.log(x);
// Only fill method can be used with empty array
x.fill(1);
console.log(x);

// fill x with 23 from item 2 to 4, excludng 4
x.fill(23, 2, 4);
console.log(x);

// Array From
const y = Array.from({length: 7}, ()=> 1);
console.log(y);

const z = Array.from({length: 7}, (_,i) => i+1);
console.log(z);

labelBalance.addEventListener("click", () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace("€","")));
    
  console.log(movementsUI);  
});


//////////////////////////////////////////////////////////////
// Date

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2022, 6, 2, 14, 45, 30));