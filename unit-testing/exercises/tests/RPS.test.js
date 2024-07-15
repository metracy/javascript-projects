const whoWon = require('../RPS.js');

describe("whoOne", function() {
    
    test("If player 1 is rock and player 2 is rock", function() {
        let result = whoWon('rock','rock');
        expect(result).toBe("TIE!");
    });

    test("If player 1 is rock and player 2 is paper", function() {
        let result = whoWon('rock','paper');
        expect(result).toBe("Player 2 wins!");
    });

    test("Player 1 is scissors, player 2 is rock.", function() {
        let result = whoWon('scissors','rock');
        expect(result).toBe("Player 2 wins!");
    });

    test("Player 1 is paper, player 2 is scissors.", function() {
        let result = whoWon('paper','scissors');;
        expect(result).toBe("Player 2 wins!");
    });

});

