import { describe, it, expect } from 'vitest';
import * as nameConverter from '../name-converter';

describe('nameConverter test suite', () => {

    it('should pass if test difficulty is correctly returned for the letter E', () => {
        const result = nameConverter.difficultyTranslator('E');
        expect(result).toBe('easy');
    });

    it('should pass if test difficulty is correctly returned for the letter M', () => {
        const result = nameConverter.difficultyTranslator('M');
        expect(result).toBe('medium');
    });

    it('should pass if test difficulty is correctly returned for the letter H', () => {
        const result = nameConverter.difficultyTranslator('H');
        expect(result).toBe('hard');
    });

    it('should pass if test difficulty is correctly returned for the letter e', () => {
        const result = nameConverter.difficultyTranslator('e');
        expect(result).toBe('easy');
    });

    it('should pass if test difficulty is correctly returned for the letter m', () => {
        const result = nameConverter.difficultyTranslator('m');
        expect(result).toBe('medium');
    });

    it('should pass if test difficulty is correctly returned for the letter h', () => {
        const result = nameConverter.difficultyTranslator('h');
        expect(result).toBe('hard');
    });

    it('should pass if test difficulty is undefined for n', () => {
        const result = nameConverter.difficultyTranslator('n');
        expect(result).toBe(undefined);
    });

});

describe('difficultyExpand test suite', () => {

    it('shoud pass if test difficulty is correctly returned for the string EASY', () => {
        const result = nameConverter.difficultyExpand('EASY');
        expect(result).toBe('easy');
    });

    it('shoud pass if test difficulty is correctly returned for the string easy', () => {
        const result = nameConverter.difficultyExpand('easy');
        expect(result).toBe('easy');
    });

    it('shoud pass if test difficulty is correctly returned for the string MEDIUM', () => {
        const result = nameConverter.difficultyExpand('MEDIUM');
        expect(result).toBe('medium');
    });

    it('shoud pass if test difficulty is correctly returned for the string medium', () => {
        const result = nameConverter.difficultyExpand('medium');
        expect(result).toBe('medium');
    });

    it('shoud pass if test difficulty is correctly returned for the string HARD', () => {
        const result = nameConverter.difficultyExpand('HARD');
        expect(result).toBe('hard');
    });

    it('shoud pass if test difficulty is correctly returned for the string hard', () => {
        const result = nameConverter.difficultyExpand('hard');
        expect(result).toBe('hard');
    });

    it('shoud pass if test difficulty is correctly returned for the string E', () => {
        const result = nameConverter.difficultyExpand('E');
        expect(result).toBe('easy');
    });

    it('shoud pass if test difficulty is correctly returned for the string m', () => {
        const result = nameConverter.difficultyExpand('m');
        expect(result).toBe('medium');
    });

    it('shoud pass if test difficulty is undefined for INVALID', () => {
        const result = nameConverter.difficultyExpand('INVALID');
        expect(result).toBe(undefined);
    });

});

describe('difficultyContract test suite', () => {

    it('should pass if the letter e is returned from the string EASY', () => {
        const result = nameConverter.difficultyContract('EASY');
        expect(result).toBe('e');
    });

    it('should pass if the letter m is returned from the string medium', () => {
        const result = nameConverter.difficultyContract('medium');
        expect(result).toBe('m');
    });

    it('should pass if the letter h is returned from the string H', () => {
        const result = nameConverter.difficultyContract('H');
        expect(result).toBe('h');
    });

});

describe('difficultyChecker test suite', () => {

    it('should pass if the letter e is returned from the string EASY', () => {
        const result = nameConverter.difficultyChecker('EASY');
        expect(result).toBe('e');
    });

    it('should pass if the letter m is returned from the string medium', () => {
        const result = nameConverter.difficultyChecker('medium');
        expect(result).toBe('m');
    });

    it('should pass if the letter h is returned from the string H', () => {
        const result = nameConverter.difficultyChecker('H');
        expect(result).toBe('h');
    });

    it('should throw an exception if the selected difficulty is not valid', () => {
        expect(() => nameConverter.difficultyChecker('K')).toThrow(Error);
        expect(() => nameConverter.difficultyChecker('K')).toThrow('The selected difficulty is not valid. Use only: easy, medium, hard.');
    });

});

describe('toKebabCase test suite', () => {

    it('should pass if the string camelCase is converted', () => {
        const result = nameConverter.toKebabCase('camelCase');
        expect(result).toBe('camel-case');
    });

    it('should pass if the string lowercase is unchanged', () => {
        const result = nameConverter.toKebabCase('lowercase');
        expect(result).toBe('lowercase');
    });

    it('should pass if the string PascalCase is converted', () => {
        const result = nameConverter.toKebabCase('PascalCase');
        expect(result).toBe('pascal-case');
    });

    it('should pass if the string PascalCase123 is converted', () => {
        const result = nameConverter.toKebabCase('PascalCase123');
        expect(result).toBe('pascal-case');
    });

});

describe('capitalize test suite', () => {

    it('should pass if the string camelCase is converted', () => {
        const result = nameConverter.capitalize('camelCase');
        expect(result).toBe('CamelCase');
    });

    it('should pass if the string lowercase is converted', () => {
        const result = nameConverter.capitalize('lowercase');
        expect(result).toBe('Lowercase');
    });

    it('should pass if the string PascalCase is unchanged', () => {
        const result = nameConverter.capitalize('PascalCase');
        expect(result).toBe('PascalCase');
    });

    it('should pass if the string e is converted', () => {
        const result = nameConverter.capitalize('e');
        expect(result).toBe('E');
    });

});

describe('toCamelCase test suite', () => {

    it('should pass if the string camelCase is unchanged', () => {
        const result = nameConverter.toCamelCase('camelCase');
        expect(result).toBe('camelCase');
    });

    it('should pass if the string lowercase is unchanged', () => {
        const result = nameConverter.toCamelCase('lowercase');
        expect(result).toBe('lowercase');
    });

    it('should pass if the string UPPERCASE is unchanged', () => {
        const result = nameConverter.toCamelCase('UPPERCASE');
        expect(result).toBe('uppercase');
    });

    it('should pass if the string PascalCase is converted', () => {
        const result = nameConverter.toCamelCase('PascalCase');
        expect(result).toBe('pascalCase');
    });

    it('should pass if the string e is unchanged', () => {
        const result = nameConverter.toCamelCase('e');
        expect(result).toBe('e');
    });

    it('should pass if the string kebab-case is converted', () => {
        const result = nameConverter.toCamelCase('kebab-case');
        expect(result).toBe('kebabCase');
    });

    it('should pass if the string Kebab-Case is converted', () => {
        const result = nameConverter.toCamelCase('Kebab-Case');
        expect(result).toBe('kebabCase');
    });

    it('should pass if the string PascalCase123 is converted', () => {
        const result = nameConverter.toCamelCase('PascalCase123');
        expect(result).toBe('pascalCase');
    });

});

describe('prefixDifficulty test suite', () => {

    it('should pass if snackName gets prefixed with e', () => {
        const result = nameConverter.prefixDifficulty('snackName');
        expect(result).toBe('eSnackName');
    });

    it('should pass if snackName gets prefixed with m', () => {
        const result = nameConverter.prefixDifficulty('snackName', 'medium');
        expect(result).toBe('mSnackName');
    });

    it('should pass if snackName gets prefixed with h', () => {
        const result = nameConverter.prefixDifficulty('snackName', 'HARD');
        expect(result).toBe('hSnackName');
    });

    it('should pass if snackName gets prefixed with h', () => {
        const result = nameConverter.prefixDifficulty('snackName', 'H');
        expect(result).toBe('hSnackName');
    });

    it('should pass if snackName gets prefixed with m', () => {
        const result = nameConverter.prefixDifficulty('snackName', 'm');
        expect(result).toBe('mSnackName');
    });

    it('should throw an exception if the selected difficulty is not valid', () => {
        expect(() => nameConverter.prefixDifficulty('snackName', 'wrong')).toThrow(Error);
        expect(() => nameConverter.prefixDifficulty('snackName', 'W')).toThrow('The selected difficulty is not valid. Use only: easy, medium, hard.');
    });
});

describe('snackNameForTest test suite', () => {

    it('should pass if snackName gets prefixed with e', () => {
        const result = nameConverter.snackNameForTest('snack-name');
        expect(result).toBe('eSnackName');
    });

    it('should pass if snackName gets prefixed with m', () => {
        const result = nameConverter.snackNameForTest('SnackName', 'medium');
        expect(result).toBe('mSnackName');
    });

    it('should pass if snackName gets prefixed with h', () => {
        const result = nameConverter.snackNameForTest('Snack-Name', 'HARD');
        expect(result).toBe('hSnackName');
    });

    it('should pass if snackName gets prefixed with h', () => {
        const result = nameConverter.snackNameForTest('snack-name', 'H');
        expect(result).toBe('hSnackName');
    });

    it('should pass if snackName gets prefixed with m', () => {
        const result = nameConverter.snackNameForTest('snack-name', 'm');
        expect(result).toBe('mSnackName');
    });

    it('should throw an exception if the selected difficulty is not valid', () => {
        expect(() => nameConverter.snackNameForTest('SnackName', 'wrong')).toThrow(Error);
        expect(() => nameConverter.snackNameForTest('SnackName', 'W')).toThrow('The selected difficulty is not valid. Use only: easy, medium, hard.');
    });
});