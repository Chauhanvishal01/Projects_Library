let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", guessNumber);

function guessNumber() {
  let userGuess = parseInt(input.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    wrng.innerHTML = "Enter a number between 1 and 100";
    input.value=""
  } else {
    numGuesses++;
    guesses.innerHTML = "No. of Guesses: " + numGuesses;

    if (userGuess > answer) {
      wrng.innerHTML = "You guessed too high";
    } else if (userGuess < answer) {
      wrng.innerHTML = "You guessed too low";
    } else {
      wrng.innerHTML = "You guessed the correct answer!";
      setTimeout(resetGame, 5000);
    }

    input.value = "";
  }
}

function resetGame() {
  numGuesses = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  wrng.innerHTML = "";
  guesses.innerHTML = "No. of Guesses: 0";
  console.log(answer);
}
