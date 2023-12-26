import { describe, test, expect } from 'vitest';
let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('mSmallestValue', () => {
    test.each([
        {
            array: [
                { value: 2 },
                { value: 1 },
                { value: 5 },
                { value: 3 },
            ], expected: 1
        },
        {
            array: [
                { value: 2 },
                { value: 10 },
                { value: -5 },
                { value: 3 },
            ], expected: -5
        },
        {
            array: [
                { value: -2 },
                { value: -10 },
                { value: -5 },
                { value: -3 },
            ], expected: -10
        },
        {
            array: [
                { value: 52 },
                { value: 10 },
                { value: 500 },
                { value: 0 },
            ], expected: 0
        },
        {
            array: [
                { value: Infinity },
                { value: -Number.MAX_VALUE },
            ], expected: -Number.MAX_VALUE
        },
    ])('mSmallestValue($array)', ({ array, expected }) => {
        const result = snack.solution(array);
        expect(result).toBe(expected);
    });

});