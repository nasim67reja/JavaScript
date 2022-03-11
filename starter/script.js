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

// Create eventhandler for log in button
let currentNumber;

btnLogin.addEventListener('click', function (e) {
  sorted = false;
  e.preventDefault();
  const inputUserInfo = [inputLoginUsername.value, Number(inputLoginPin.value)];
  currentNumber = accounts.find(num => num.username === inputUserInfo[0]);
  if (
    currentNumber &&
    currentNumber.username === inputUserInfo[0] &&
    currentNumber.pin === inputUserInfo[1]
  ) {
    containerApp.style.opacity = '1';
    displayMovements(currentNumber);
    displaySummary(currentNumber);
  }
  // Clear input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
});

// This funtion Display the withdrawal and deposit moneys
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = '';
  const mov = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  mov.forEach(function (value, index) {
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
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentNumber, !sorted);
  sorted = sorted === false ? true : false;
  // sorted= !sorted // same as line 133 but simpler than before
});

// This function will be display the summary,titel & total money
let totalMoney;
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
    .filter(deposit => deposit > 0)
    .map(depint => (depint * acc.interestRate) / 100)
    .filter(abv => abv > 1)
    .reduce((acc, crnt) => acc + crnt);

  labelSumInterest.textContent = `${interest}€`;
  totalMoney = deposit + withdrawal;
  labelBalance.textContent = `${totalMoney}€`;
  labelWelcome.textContent = `Welcome back, ${acc.owner.split(' ')[0]}`;
}
//////////////////////////////////////////////////////////////////////////////////
// transfer money button handler funtion
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const receieveAccount = accounts.find(
    num => num.username === inputTransferTo.value
  );
  if (
    transferAmount > 0 &&
    transferAmount <= totalMoney &&
    receieveAccount &&
    receieveAccount.username !== currentNumber.username
  ) {
    receieveAccount.movements.push(transferAmount);
    currentNumber.movements.push(-transferAmount);
    displayMovements(currentNumber);
    displaySummary(currentNumber);
  }

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});
// Request loan button handler function=>
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentNumber.movements.some(mov => mov > amount * 0.1)) {
    currentNumber.movements.push(amount);
    displayMovements(currentNumber);
    displaySummary(currentNumber);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});
// close account btn handler funtion =>
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUserName = inputCloseUsername.value;
  const closeUserPin = inputClosePin.value;

  if (
    currentNumber.username === closeUserName &&
    currentNumber.pin === Number(closeUserPin)
  ) {
    const nameIndex = accounts.findIndex(ind => ind.username === closeUserName);
    accounts.splice(nameIndex, 1);
    // display UI after deleting an account
    containerApp.style.opacity = '0';
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});
// 🔥🔥🔥🔥  Calculate movements array from nodelist or UI
document
  .querySelector('.balance__label')
  .addEventListener('click', function () {
    const allMovements = document.querySelectorAll('.movements__value');
    const fromNodeList = Array.from(allMovements, num => num.textContent).map(
      el => Number(el.replace(/€/gi, ''))
    );
    // console.log(fromNodeList);
    const altNodeList = [...allMovements]; // alternative of from but jonas prefer to use from
  });
// Exercise
// 1.count sum of all bank deposit
const totalDeposit = accounts
  .flatMap(acnt => acnt.movements)
  .filter(dep => dep > 0)
  .reduce((acc, crnt) => acc + crnt);
console.log(totalDeposit);
//2. how many deposite is atleast 1000

const aboveThousandDeposit = accounts
  .flatMap(acnt => acnt.movements)
  .filter(dep => dep >= 1000).length;
console.log(aboveThousandDeposit);
const aboveThousandDepositCp = accounts
  .flatMap(acnt => acnt.movements)
  .reduce((acc, crnt) => (crnt >= 1000 ? acc + 1 : acc), 0);
console.log(aboveThousandDepositCp);

const depWith = accounts
  .flatMap(am => am.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposit += cur) : (acc.withdrawal += cur);
      acc[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
      return acc;
    },
    {
      deposit: 0,
      withdrawal: 0,
    }
  );
console.log(depWith);

const arr10 = [2, 4];
const redArr = arr10.reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []);
console.log(redArr);
// 4. conver to title case
// this is a title case => This Is a Title Case
const converTitleCase = function (text) {
  return text
    .split(' ')
    .map(word =>
      word.length > 1
        ? `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
        : word
    )
    .join(' ');
};
let text = 'this is a title case';
console.log(converTitleCase(text));
console.log(converTitleCase('thIs is a LONG title but not too lonG'));
