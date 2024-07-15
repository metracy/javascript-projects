const whoWon = require("./RPS");

function whoWon2(player1, player2) {
  const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
      return 'Invalid input';
  }

  if (player1 === player2) {
      return 'TIE!';
  }

  const winConditions = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock']
  };

  if (winConditions[player1].includes(player2)) {
      return 'Player 1 wins!';
  } else {
      return 'Player 2 wins!';
  }
}

module.exports = whoWon2