import { describe, test, expect } from 'vitest';
let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('snackNameStub', () => {
    /**
     * Add some test cases.
     * Be sure to include some edge cases
     * Every object in the array will be passed to the test function as a parameter,
     * so adapt the function to the structure you'll need.
     * 
     * !!!DO NOT CHANGE THE TEST DESCRIPTION AND NAME!!!
     * Update only the parameters to match what you'll pass to the test function
     * 
     * Please remove this comment before submitting your snack.
     */
    test.each([
        { param: true, expected: true }
    ])('snackNameStub($param)', ({ param, expected }) => {
        const result = snack.solution(param);
        expect(result).toBe(expected);
    });

});