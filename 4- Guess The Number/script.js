const answer = Math.floor(Math.random() * 100 + 1);
// console.log(answer)

let numGuess = 0;
let playGame = true;
let pg = [];
const guesses = document.getElementsByClassName('guesses');
const remaining = document.querySelector('.lastResult');
const message = document.querySelector('.lowOrHi');
const userInput = document.querySelector('#guessField');

// const lastMessage = document.createElement('lastMessage');

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const guess = parseInt(userInput.value)
  remaining.innerText--;

  // numGuess++;
  // console.log(numGuess)

  // console.log(answer)
  // if(numGuess == 10){
  //   message.innerText = `You lost`
  // }

  if (remaining.innerText == 0) {
    playGame = false;
  }
  if (playGame == false) {
    location.reload();
  }

  if (guess == '' || guess <= 0 || isNaN(guess)) {
    message.innerText = `Please enter valid number`;
    // console.log("reached 1");
  }
  if (guess == answer) {
    userInput.value = ''
    message.textContent = `Correct. You win. Yayy`;
    // console.log("reached 2");
  }
  if (guess > answer) {
    message.textContent = `Incorrect. Try Lower`;
    userInput.value = ''
    // pg.push(guess);
    guesses.textContent += `${guess} `;
    // guesses.textContent = `${pg}`
    console.log(guess);
  }
  if (guess < answer) {
    message.textContent = `NOPE. Too Low. Try Higher`;
    userInput.value = ''
    // pg.push(guess);
    guesses.textContent += `${guess} `;
    // guesses.textContent = `${pg}`
    console.log(guess);
  }
});
