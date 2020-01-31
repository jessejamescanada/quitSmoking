const cost = document.querySelector('#costInput');
const days = document.querySelector('#daysInput');
const numOfCigs = document.querySelector('#numOfCigs')
const resultsBTN = document.querySelector('#btn');
const clearBTN = document.querySelector('#clearBTN')
const howLong = document.querySelector('.howLongP');
const moneySaved = document.querySelector('.moneySaved')
const numberCigs = document.querySelector('.numberCigs')

const calculate = () => {
if(cost.value ==='' || days.value === '' || numOfCigs.value === ''){
  return false;
}
  document.querySelector('.results').style.display = 'flex';
  const userCost = cost.value;
  let calendar = days.value;
  console.log(calendar);
  const cigAmount = numOfCigs.value;
// Convert dates to milliseconds then get days
const getDate = moment().format('YYYY-MM-DD');
console.log(getDate);
//   const getDate = new Date();
//   console.log(getDate);
//   const month = getDate.getUTCMonth() + 1; 
//   const day = getDate.getUTCDate();
//   const year = getDate.getUTCFullYear();
//   newdate = year + "-" + month + "-" + day;
//   console.log(newdate);
// // calculates total days
  const calendarMilliSeconds = new Date(calendar)
  const newdateMilliseconds = new Date(getDate)
  const totalDaysQuit = (newdateMilliseconds - calendarMilliSeconds) /  86400000
  howLong.innerHTML = `<p>You've quit smoking for <strong class="bold">${totalDaysQuit.toFixed(0)}</strong> days!</p>`

  // calculate total money saved since quit day
  const eachCig = userCost / 25;
  const pricePerDay = eachCig * cigAmount
  const totalMoneySaved = pricePerDay * totalDaysQuit
  moneySaved.innerHTML =`<p>You've saved <strong class="bold">$${totalMoneySaved.toFixed(2)}</strong></p>`

// calculate amount of cigarettes not smoked since quit day
  const cigarettesNotSmoked = cigAmount * totalDaysQuit
  numberCigs.innerHTML = `<p><strong class="bold">${cigarettesNotSmoked.toFixed(0)}</strong> Cigarettes not smoked!</p>`
  
  cost.value = '';
  days.value = '';
  numOfCigs.value = '1';
  resultsBTN.disabled = true;
  const x = window.matchMedia("(max-width: 600px)")
  myFunction(x)
}

// function removes input values on screens less then 600 px to display results
const myFunction = (x) => {
  if(x.matches) {
    document.querySelector('.costPerPackContainer').style.display = 'none';
    document.querySelector('.daysContainer').style.display = 'none';
    document.querySelector('.cigsPerDayContainer').style.display = 'none';
    resultsBTN.style.display = 'none'
  }
}

const clearValues = () => {
  totalDaysQuit = 0;
  totalMoneySaved = 0;
  cigarettesNotSmoked = 0;
  howLong.innerHTML = '';
  moneySaved.innerHTML = ''
  numberCigs.innerHTML = '';
  cost.value = '';
  days.value = '';
  numOfCigs.value = '1';
  resultsBTN.disabled = false;
  // when input section removed from mobile this brings it back
  document.querySelector('.costPerPackContainer').style.display = 'block';
  document.querySelector('.daysContainer').style.display = 'block';
  document.querySelector('.cigsPerDayContainer').style.display = 'block';
  resultsBTN.style.display = 'inline-block'
}

// event listeners
resultsBTN.addEventListener('click', calculate)
clearBTN.addEventListener('click', clearValues)

