import { describe, test, expect } from 'vitest';
let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('mInfinityString', () => {
    test.each([
        { s: "ABCDE", start: 2, end: 4, expected: "CDE" },
        { s: "ABCDE", start: 17, end: 24, expected: "CDEABCDE" },
        { s: "customString123", start: 1498, end: 1503, expected: "23cust" },
        { s: "customString123", start: 5712, end: 5715, expected: "123c" },
        { s: "kasc asch 23 acndl 3.", start: 121, end: 128, expected: "dl 3.kas" },
        { s: "kasc asch 23 acndl 3.", start: 11, end: 11, expected: "3" },
        { s: "kasc asch 23 acndl 3.", start: 11, end: 10, expected: "" },
    ])('mInfinityString($s, $start, $end)', ({ s, start, end, expected }) => {
        const result = snack.solution(s, start, end);
        expect(result).toBe(expected);
    });

});