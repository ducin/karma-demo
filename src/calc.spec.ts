describe("Add function", function() {
    it("adds positive numbers correctly", function() {
        expect(add(3, 76)).toEqual(79);
    });

    it("adds negative numbers correctly", function() {
        expect(add(-45, -8)).toEqual(-53);
    });
});

describe("Sub function", function() {
    it("subtracts numbers correctly", function() {
        expect(sub(20, 5)).toEqual(15);
    });
});
