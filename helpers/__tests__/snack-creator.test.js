import { fs, vol } from 'memfs';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createScaffolding } from '../snack-creator';

vi.mock('fs/promises', () => {
    return {
        default: fs.promises
    }
})

let consoleLogSpy;

describe('snackCreator', () => {

    beforeEach(() => {
        vol.reset();
        consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should create a new snack easy/new-snack', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/stubs/snack/snack.js`]: 'stubSnackContent',
                [`${process.cwd()}/stubs/snack/__tests__/snack.test.js`]: 'stubSnackContent for snackNameStub',
                [`${process.cwd()}/stubs/snack/.solution/snack.js`]: 'stubSnackSolution',
                [`${process.cwd()}/snacks/easy/existing-snack/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/existing-snack/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/existing-snack/__tests__/snack.test.js`]: 'existingSnackTests'
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });
        await createScaffolding('new-snack', 'easy');

        expect(vol.readdirSync(`${process.cwd()}/snacks/easy`)).toContain('new-snack');
        expect(vol.readdirSync(`${process.cwd()}/snacks/easy`)).toHaveLength(2);

        expect(vol.readdirSync(`${process.cwd()}/snacks/easy/new-snack`)).toHaveLength(3);
        expect(vol.readdirSync(`${process.cwd()}/snacks/easy/new-snack`)).toContain('__tests__');
        expect(vol.readdirSync(`${process.cwd()}/snacks/easy/new-snack`)).toContain('.solution');
        expect(vol.readdirSync(`${process.cwd()}/snacks/easy/new-snack`)).toContain('snack.js');

        expect(vol.readFileSync(`${process.cwd()}/snacks/easy/new-snack/__tests__/snack.test.js`, 'utf8')).toEqual('stubSnackContent for eNewSnack');

        expect(consoleLogSpy).toHaveBeenCalledTimes(3);
    });

    it('should throw an error since easy/existing-snack already exist', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/stubs/snack/snack.js`]: 'stubSnackContent',
                [`${process.cwd()}/stubs/snack/__tests__/snack.test.js`]: 'stubSnackContent for snackNameStub',
                [`${process.cwd()}/stubs/snack/.solution/snack.js`]: 'stubSnackSolution',
                [`${process.cwd()}/snacks/easy/existing-snack/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/existing-snack/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/existing-snack/__tests__/snack.test.js`]: 'existingSnackTests'
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });
        await expect(() => createScaffolding('existing-snack', 'easy')).rejects.toThrowError(
            /^A snack named existing-snack for difficulty level easy already exist! Create a different snack or change the snack's name$/
        );

    });
});