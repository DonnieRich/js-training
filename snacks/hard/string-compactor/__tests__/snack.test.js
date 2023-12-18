import { describe, test, expect } from 'vitest';
let snack;

if (process.env.NODE_ENV == "training") {
    const { default: solution } = await import("../snack.js");
    snack = solution;
} else {
    const { default: solution } = await import("../.solution/snack.js");
    snack = solution;
}


describe('hStringCompactor', () => {
    test.each([
        { s: "easy", expected: "e1a1s1y1" },
        { s: "stuuuuuuuuuuuuuuuuck", expected: "s1t1u16c1k1" },
        { s: "keyyyyyyboaaaaarrrd", expected: "k1e1y6b1o1a5r3d1" },
        { s: "kkkkkeyboard nnnnot       workinggggg", expected: "k5e1y1b1o1a1r1d1 1n4o1t1 7w1o1r1k1i1n1g5" },
        { s: "122333444455555666666", expected: "112233445566" },
        { s: "111111111222222223333333444444555556666777889", expected: "192837465564738291" },
        { s: "'''''''''##]]]]]]]]]]", expected: "'9#2]10" },
    ])('hStringCompactor($s)', ({ s, expected }) => {
        const result = snack.solution(s);
        expect(result).toBe(expected);
    });

});