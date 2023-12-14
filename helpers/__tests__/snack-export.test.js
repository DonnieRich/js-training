import { exporter } from '../snack-export';
import snack from '../../snacks/easy/multi-sum/snack';

describe('snackExport', () => {

    it('should pass if the snack is exported correctly', async () => {
        await expect(exporter('eMultiSum')).resolves.toEqual(snack);
    });

    it('should fail since the snack do not exist', async () => {
        await expect(exporter('hNotExistingSnack')).rejects.toThrow("Cannot find module '../snacks/hard/not-existing-snack/snack.js' from 'helpers/snack-export.js'");
    });
})