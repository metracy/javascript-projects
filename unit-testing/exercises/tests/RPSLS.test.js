const whoWon2 = require('../RPSLS.js');

describe("whoWon2", function() {

    test("should return 'TIE!' when both players choose the same option", function() {
        expect(whoWon2('rock', 'rock')).toBe('TIE!');
        expect(whoWon2('paper', 'paper')).toBe('TIE!');
        expect(whoWon2('scissors', 'scissors')).toBe('TIE!');
        expect(whoWon2('lizard', 'lizard')).toBe('TIE!');
        expect(whoWon2('spock', 'spock')).toBe('TIE!');
    });

    test("should return 'Player 1 wins!' for winning scenarios", function() {
        expect(whoWon2('rock', 'scissors')).toBe('Player 1 wins!');
        expect(whoWon2('rock', 'lizard')).toBe('Player 1 wins!');
        expect(whoWon2('paper', 'rock')).toBe('Player 1 wins!');
        expect(whoWon2('paper', 'spock')).toBe('Player 1 wins!');
        expect(whoWon2('scissors', 'paper')).toBe('Player 1 wins!');
        expect(whoWon2('scissors', 'lizard')).toBe('Player 1 wins!');
        expect(whoWon2('lizard', 'spock')).toBe('Player 1 wins!');
        expect(whoWon2('lizard', 'paper')).toBe('Player 1 wins!');
        expect(whoWon2('spock', 'scissors')).toBe('Player 1 wins!');
        expect(whoWon2('spock', 'rock')).toBe('Player 1 wins!');
    });

    test("should return 'Player 2 wins!' for losing scenarios", function() {
        expect(whoWon2('scissors', 'rock')).toBe('Player 2 wins!');
        expect(whoWon2('lizard', 'rock')).toBe('Player 2 wins!');
        expect(whoWon2('rock', 'paper')).toBe('Player 2 wins!');
        expect(whoWon2('spock', 'paper')).toBe('Player 2 wins!');
        expect(whoWon2('paper', 'scissors')).toBe('Player 2 wins!');
        expect(whoWon2('lizard', 'scissors')).toBe('Player 2 wins!');
        expect(whoWon2('spock', 'lizard')).toBe('Player 2 wins!');
        expect(whoWon2('paper', 'lizard')).toBe('Player 2 wins!');
        expect(whoWon2('scissors', 'spock')).toBe('Player 2 wins!');
        expect(whoWon2('rock', 'spock')).toBe('Player 2 wins!');
    });

    test("should return 'Invalid input' for invalid choices", function() {
        expect(whoWon2('rock', 'banana')).toBe('Invalid input');
        expect(whoWon2('apple', 'spock')).toBe('Invalid input');
    });

});

