import fs from 'fs/promises';
import constants from 'node:constants';
import chalk from 'chalk';
const log = console.log;
import { snackNameForTest } from "./name-converter.js";

const createScaffolding = async (snackName, difficulty) => {
    log(chalk.green('📑  Copying snack files...'));

    fs.access(`./snacks/${difficulty}/${snackName}`, constants.R_OK | constants.W_OK)
        .then(() => {
            log(chalk.red("A snack with this name and difficulty already exist! Create a different snack or change the snack's name"));
        })
        .catch(async (err) => {

            if (err.code === 'ENOENT') {
                await fs.mkdir(`./snacks/${difficulty}/${snackName}`);
                await fs.mkdir(`./snacks/${difficulty}/${snackName}/__tests__`);
                await fs.mkdir(`./snacks/${difficulty}/${snackName}/.solution`);

                await fs.copyFile('./stubs/snack/__tests__/snack.test.js', `./snacks/${difficulty}/${snackName}/__tests__/snack.test.js`);
                await fs.copyFile('./stubs/snack/.solution/snack.js', `./snacks/${difficulty}/${snackName}/.solution/snack.js`);
                await fs.copyFile('./stubs/snack/snack.js', `./snacks/${difficulty}/${snackName}/snack.js`);

                const snackTestDescription = snackNameForTest(snackName, difficulty);

                const currentTestStubContent = await fs.readFile(`./snacks/${difficulty}/${snackName}/__tests__/snack.test.js`, 'utf8');
                const newFileContent = currentTestStubContent.replace(/snackNameStub/g, snackTestDescription);

                await fs.writeFile(`./snacks/${difficulty}/${snackName}/__tests__/snack.test.js`, newFileContent, 'utf8');

                log(chalk.green('📑  Stubs snack files copied...'));
                log(chalk.green(`Go inside snacks/${difficulty}/${snackName} to start creating your snack!`));
            } else {
                log(chalk.red(err.message));
            }
        });

}

export { createScaffolding };