let win = document.querySelector("#win");
let lost = document.querySelector("#lost");
let guessChance = document.querySelector("#guessChance");
let estimates = document.querySelector("#estimates");

var letters = ["a", "n", "i", "r"];

var userChoice = [];
var compChoice = null;

var wins = 0;
var losses = 0;
var chance = 3;

var randomLetter = () => (compChoice = letters[Math.floor(Math.random() * letters.length)].toUpperCase());
var chanceGuess = () => (guessChance.innerHTML = `Guess of Chance: ${chance}`);
var wrongChoise = () => (estimates.innerHTML = `Wrong estimates: ${userChoice}`);

chanceGuess();
randomLetter();

function resetGame() {
    chance = 3;
    userChoice = [];
    randomLetter();
    chanceGuess();
    wrongChoise();
}

var selectLetterRandomly = (choise) => {
    if (userChoice.indexOf(choise) === -1) {
        userChoice.push(choise);
        chance--;
        chanceGuess();
        wrongChoise();
        
        if (choise === compChoice) {
            alert("you won!");
            wins++;
            win.innerHTML = `Wins: ${wins}`;
            resetGame();
        } 
    
        if(chance === 0){
            alert("you lost!");
            losses++
            lost.innerHTML = `Losses: ${losses}`;;
            resetGame();
        }
    };
}

window.onkeydown = (e) => selectLetterRandomly(e.key.toUpperCase());