import { fs, vol } from 'memfs';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { listAllSnacks } from '../snack-explorer';

vi.mock('fs/promises', () => {
    return {
        default: fs.promises
    }
});

let consoleLogSpy;

describe('snackExplorer', () => {

    beforeEach(() => {
        vol.reset();
        consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should list all easy snacks (3)', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/snacks/easy/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-2/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-2/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-2/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-3/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-3/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-3/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/medium/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/medium/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/medium/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });
        await listAllSnacks('easy');

        expect(consoleLogSpy).toHaveBeenCalledTimes(3);
        expect(consoleLogSpy).toHaveBeenCalledWith('snack-1');
        expect(consoleLogSpy).toHaveBeenCalledWith('snack-2');
        expect(consoleLogSpy).toHaveBeenCalledWith('snack-3');
    });

    it('should list all medium snacks (1)', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/snacks/easy/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-2/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-2/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-2/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-3/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-3/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-3/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/medium/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/medium/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/medium/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });
        await listAllSnacks('medium');

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('snack-1');
    });

    it('should log the message "no hard snacks availables"', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/snacks/easy/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-2/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-2/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-2/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-3/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-3/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-3/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/medium/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/medium/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/medium/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/hard`]: null,
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });
        await listAllSnacks('hard');

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('Currently there are no hard snacks availables');
    });

    it('should log the message "no hard snacks availables"', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/snacks/easy/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-2/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-2/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-2/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/easy/snack-3/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/easy/snack-3/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/easy/snack-3/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/medium/snack-1/snack.js`]: 'existingSnack',
                [`${process.cwd()}/snacks/medium/snack-1/.solution/snack.js`]: 'existingSnackSolution',
                [`${process.cwd()}/snacks/medium/snack-1/__tests__/snack.test.js`]: 'existingSnackTests',

                [`${process.cwd()}/snacks/hard`]: null,
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });

        await expect(() => listAllSnacks('non-existing-directory')).rejects.toThrowError(
            /^ENOENT: no such file or directory/
        );
    });
});