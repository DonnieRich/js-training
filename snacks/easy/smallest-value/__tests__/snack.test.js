import { describe, test, expect } from 'vitest';
let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('eSmallestValue', () => {
    test.each([
        { a: [1, 2, 3, 4], expected: 1 },
        { a: [5, 5], expected: 5 },
        { a: [8, 5, 7], expected: 5 },
        { a: [1000, 200, 3], expected: 3 },
        { a: [10, 1, 9, 2, 8, 3, -5, 19, 5], expected: -5 },
        { a: [-10, -1, -9, -2, -8, -3, -5, -19], expected: -19 },
        { a: [0], expected: 0 },
    ])('eSmallestValue($a)', ({ a, expected }) => {
        const result = snack.solution(a);
        expect(result).toBe(expected);
    });

});