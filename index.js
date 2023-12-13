#! /usr/bin/env node

import { Command, Option } from "commander";
import { snackNameForTest, toKebabCase, difficultyExpand } from "./helpers/name-converter.js";
import { createScaffolding } from "./helpers/snack-creator.js";
import { exporter } from "./helpers/snack-export.js";
import chalk from 'chalk';
const log = console.log;

const program = new Command();

program
    .addOption(new Option('-i, --info-snack <name>', 'Get info for the selected snack'))
    .addOption(new Option('-c, --create-snack <name>', 'Create the scaffolding for a new snack'))
    .addOption(new Option('-d, --difficulty <difficulty>', 'Select snack difficulty').choices(['easy', 'e', 'medium', 'm', 'hard', 'h']).preset('easy'))
    .addOption(new Option('-h, --help', 'To use this package you have to read the info for the snack you want to solve, add your code and then run the test for that snack'));

program
    .configureOutput({
        outputError: (str, write) => write(chalk.red(str))
    });

program.parse(process.argv);

const options = program.opts();
if (options.infoSnack) {
    const difficulty = options.difficulty ?? 'easy';
    const snackName = snackNameForTest(options.infoSnack, difficulty);
    log(chalk.blue(`Getting info for: ${snackName}`));

    exporter(snackName)
        .then(snack => {
            snack.info();
            log(chalk.green(`To test your solution for ${snackName} run the following command:\nnpm run test -- ${snackName}`));
        })
        .catch(error => {
            log(chalk.red(`Cannot find a snack namend ${options.infoSnack} for the selected difficulty level (${difficulty})`));
        });
}
if (options.createSnack) {
    const snackName = toKebabCase(options.createSnack);
    let difficulty = options.difficulty ?? 'easy';

    if (difficulty.length === 1) {
        difficulty = difficultyExpand(difficulty);
    }

    createScaffolding(snackName, difficulty);
}
if (options.help) {
    log(chalk.blue(`
    To use this package you have to read the info for the snack you want to solve, add your code and then run the test for that snack.
    For example:
        - open snacks/easy/multi-sum/snack.js
        - read carefully the instructions with the input/output instructions
        - add your code in the solution function (NOTE: the function should return your solution)
        - run the corresponding test and check if your solution pass all the test cases
    `));
}