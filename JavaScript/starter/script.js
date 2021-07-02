'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Create username property for all of the account object
function createUserName(acc) {
  acc.forEach(useracc => {
    useracc.username = useracc.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  });
}
createUserName(accounts);
// Create eventhandler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const inputUserInfo = [inputLoginUsername.value, Number(inputLoginPin.value)];
  const userNameArr = [];
  const userPinArr = [];
  const accountUserName = accounts.reduce((acc, crnt) => {
    userNameArr.push(crnt.username);
    userPinArr.push(crnt.pin);
  }, 0);
  if (
    userNameArr.includes(inputUserInfo[0]) &&
    userPinArr.includes(inputUserInfo[1])
  ) {
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    containerApp.style.opacity = '1';
    const accountNumber = accounts.find(
      num => num.username === inputUserInfo[0]
    );
    displayMovements(accountNumber);
    displaySummary(accountNumber);
  }
});
/*this is jonas btn handler funtion
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});
*/

// This funtion Display the withdrawal and deposit moneys
function displayMovements(acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach(function (value, index) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${value}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
// displayMovements(account4);

// This function will be display the summary
function displaySummary(acc) {
  const deposit = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, crnt) => acc + crnt, 0);
  labelSumIn.textContent = `${deposit}€`;
  const withdrawal = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, crnt) => acc + crnt, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
  const totalMoney = deposit + withdrawal;
  labelBalance.textContent = `${totalMoney}€`;
  labelWelcome.textContent = `Welcome back, ${acc.owner.split(' ')[0]}`;
}
// displaySummary(account4);

//////////////////////////////////////////////////////////////////////////////////
// const targetName = 'Jonas Schmedtmann';
// const findName = accounts.filter(acc => acc.owner === targetName);
// console.log(findName);
// //  alternative with for of loop
// for (const item of accounts) {
//   if (item.owner === targetName) console.log(item);
//   break;
// }
// / This function will help to display the total balance of a user
// function totalMoney(moneys) {
//   const allMoney = moneys.reduce((acc, crnt) => acc + crnt);
//   labelBalance.textContent = `${allMoney}€`;
// }
// totalMoney(movements);
