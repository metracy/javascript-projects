const checkFive = require('../checkFive.js');

describe("checkFive", function() {
    
    test("Value is greater than 5", function() {
        let result = checkFive(7);
        expect(result).toBe("7 is greater than 5.");
    });

    test("Value is less than 5", function() {
        let result = checkFive(2);
        expect(result).toBe("2 is less than 5.");
    });

    test("Value is equal to 5", function() {
        let result = checkFive(5);
        expect(result).toBe("5 is equal to 5.");
    });

});