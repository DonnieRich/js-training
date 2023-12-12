let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('multiSum', () => {

    test.each([
        { numbers: [1, 2, 3, 4], expected: 20 },
        { numbers: [5, 5], expected: 20 },
        { numbers: [3, 5, 7], expected: 30 },
        { numbers: [100, 200], expected: 600 },
        { numbers: [-2, -11], expected: -26 },
        { numbers: [-4, 50], expected: 92 },
        { numbers: [], expected: 0 },
    ])('multiSum($numbers)', ({ numbers, expected }) => {
        const result = snack.solution(numbers);
        expect(result).toBe(expected);
    });

});