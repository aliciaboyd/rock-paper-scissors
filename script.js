var playerPoints = 0;
var computerPoints = 0;

const CHOICE_ROCK = document.getElementById('rock-choice');
const CHOICE_PAPER = document.getElementById('paper-choice');
const CHOICE_SCISSORS = document.getElementById('scissors-choice');
const RESTART_GAME = document.getElementById('restart');


//chooses random play for computer
function computerPlay() {
  var choices = ['rock', 'paper', 'scissors'];
  var random = Math.floor(Math.random() * choices.length);
  return choices[random];
};


//see who wins each round with text changes
function round(playerSelection, computerSelection) {
//check if win has happened
if (playerPoints < 5 && computerPoints < 5) {

    if (playerSelection === computerSelection) {
      document.getElementById('result').innerHTML = 'Tie! Play again!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      document.getElementById('result').innerHTML = 'You won!';
      playerPoints += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      document.getElementById('result').innerHTML = 'You won!';
      playerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      document.getElementById('result').innerHTML = 'You won!';
      playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      document.getElementById('result').innerHTML = 'You lost!';
      computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      document.getElementById('result').innerHTML = 'You lost!';
      computerPoints += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      document.getElementById('result').innerHTML = 'You lost!';
      computerPoints += 1;
    };

    //changing computer selection image
    if (computerSelection == 'rock') {
      document.getElementById("computerPlay").src="img/com-rock.png";
    } else if (computerSelection == 'paper') {
      document.getElementById("computerPlay").src="img/com-paper.png";
    } else if (computerSelection == 'scissors') {
      document.getElementById("computerPlay").src="img/com-scissors.png";
    };

    //converts score to string to display in HTML
    var comscore = computerPoints.toString();
    document.getElementById('comScore').innerHTML = comscore;
    var playscore = playerPoints.toString();
    document.getElementById('playScore').innerHTML = playscore;

    //displays win text
    if (computerPoints === 5 && playerPoints < 5) {
      document.getElementById('gameHeading').innerHTML = "Computer Won! Restart to Play again!";
    } else if (playerPoints === 5 && computerPoints < 5){
      document.getElementById('gameHeading').innerHTML = "You Won! Restart to Play again!";
      };
      
    return;
  }
};


CHOICE_ROCK.addEventListener('click', function (event) {
  round('rock', computerPlay());
  document.getElementById("playerPlay").src="img/player-rock.png";
});

CHOICE_PAPER.addEventListener('click', function (event) {
  round('paper', computerPlay());
  document.getElementById("playerPlay").src="img/player-paper.png";
});

CHOICE_SCISSORS.addEventListener('click', function (event) {
  round('scissors', computerPlay());
  document.getElementById("playerPlay").src="img/player-scissors.png";
});


//resets counter variables and changes display text
RESTART_GAME.addEventListener('click', function (event) {
  playerPoints = 0;
  computerPoints = 0;
  document.getElementById('comScore').innerHTML = "0";
  document.getElementById('playScore').innerHTML = "0";
  document.getElementById('result').innerHTML = 'Let\'s play!';
  document.getElementById('gameHeading').innerHTML = "First to 5 wins.";
});
