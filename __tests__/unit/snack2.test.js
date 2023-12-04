import snack from "../../snacks/snack-2.mjs";

describe('Testing snack #2...', () => {

    test.each([
        { numbers: [1, 2, 3, 4], expected: 20 },
        { numbers: [5, 5], expected: 20 },
        { numbers: [3, 5, 7], expected: 30 },
        { numbers: [100, 200], expected: 600 },
        { numbers: [-2, -11], expected: -26 },
        { numbers: [-4, 50], expected: 92 },
        { numbers: [], expected: 0 },
    ])('snack($numbers)', ({ numbers, expected }) => {
        const result = snack.solution(numbers);
        expect(result).toBe(expected);
    });

});