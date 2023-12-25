import { describe, test, expect } from 'vitest';
let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('eAlphabeticalOrder', () => {
    test.each([
        { array: ['a', 'b', 'c'], expected: 'a' },
        { array: ['z', 'y', 'x'], expected: 'x' },
        { array: ['dog', 'ant', 'cat'], expected: 'ant' },
        { array: ['really', 'realism', 'real'], expected: 'real' },
        { array: ['where', '', 'what'], expected: '' },
        { array: ['a', '1', 'A'], expected: '1' },
        { array: ['y', 'z', 'A', 'B'], expected: 'A' },
    ])('eAlphabeticalOrder($array)', ({ array, expected }) => {
        const result = snack.solution(array);
        expect(result).toBe(expected);
    });

});