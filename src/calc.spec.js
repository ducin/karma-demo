var calc = require('./calc');

describe("Add function", function() {
    it("adds positive numbers correctly", function() {
        expect(calc.add(3, 76)).toEqual(79);
    });

    it("adds negative numbers correctly", function() {
        expect(calc.add(-45, -8)).toEqual(-53);
    });
});

describe("Sub function", function() {
    it("subtracts numbers correctly", function() {
        expect(calc.sub(20, 5)).toEqual(15);
    });
});
