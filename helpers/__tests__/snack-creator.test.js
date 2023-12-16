import { fs, vol } from 'memfs';
import { jest } from '@jest/globals';

jest.unstable_mockModule('fs/promises', () => (
    {
        default: {
            ...fs.promises
        }
    }
));

// console.log = jest.fn();
const { createScaffolding } = await import('../snack-creator');

describe('snackCreator', () => {

    beforeEach(() => {
        // vol.reset();
    });

    it('should work', async () => {

        vol.fromJSON(
            {
                [`${process.cwd()}/stubs/snack/snack.js`]: 'maremma',
                [`${process.cwd()}/stubs/snack/__tests__/snack.test.js`]: 'maremmaTest',
                [`${process.cwd()}/stubs/snack/.solution/snack.js`]: 'maremmaSolution',
                // [`${process.cwd()}/snacks/easy/no-problem/snack.js`]: 'ERR',
                [`${process.cwd()}/snacks/easy/nosweat.js`]: 'z'
            }
        );
        vol.mkdirSync(process.cwd(), { recursive: true });
        console.log(vol.toJSON())
        await createScaffolding('no-problem', 'easy');
        console.log(vol.toJSON())
        // expect(vol.toJSON()).toMatchSnapshot();
    })

})