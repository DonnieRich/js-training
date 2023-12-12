let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}

describe('reverseString', () => {

    test.each([
        { number: 1, string: "Hello World!", expected: "!dlroW olleH" },
        { number: 0, string: "Hello World!", expected: "Hello World!" },
        { number: 20, string: "Really?", expected: "Really?" },
        { number: 201, string: "No problem", expected: "melborp oN" },
        { number: 202, string: "AbcDeFgHiJkLm", expected: "AbcDeFgHiJkLm" },
        { number: 1237, string: "uVwxYz", expected: "zYxwVu" },
    ])('reverseString($number, $string)', ({ number, string, expected }) => {
        const result = snack.solution(number, string);
        expect(result).toBe(expected);
    });

});