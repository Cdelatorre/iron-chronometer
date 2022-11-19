const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const btnLightElement = document.getElementById('btnLight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutesStr = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  // 00
  minDecElement.innerText = minutesStr[0];
  minUniElement.innerText = minutesStr[1];
}

function printSeconds() {
  const secondsStr = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  // 03
  secDecElement.innerText = secondsStr[0];
  secUniElement.innerText = secondsStr[1];
}

// ==> BONUS
function printMilliseconds() {
  const milisecondsStr = chronometer.computeTwoDigitNumber(
    chronometer.getMiliseconds()
  );

  milDecElement.innerText = milisecondsStr[0];
  milUniElement.innerText = milisecondsStr[1];
}

function printSplit() {
  const split = document.createElement('li');
  const time = chronometer.split();

  split.textContent = time;

  splitsElement.appendChild(split);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const isStartButton = btnLeftElement.classList.contains('start');

  if (isStartButton) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const isResetButton = btnRightElement.classList.contains('reset');

  if (isResetButton) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});

btnLightElement.addEventListener('click', () => {
  const sphere = document.querySelector('#sphere');
  sphere.classList.add('light-up');

  setTimeout(() => {
    sphere.classList.remove('light-up');
  }, 2000);
  console.log('aqui se enciende');
});
