#! /usr/bin/env node

import { Command, Option } from 'commander';
import { snackNameForTest, toKebabCase, difficultyExpand } from './helpers/name-converter.js';
import { createScaffolding } from './helpers/snack-creator.js';
import { exporter } from './helpers/snack-export.js';
import { listAllSnacks } from './helpers/snack-explorer.js'
import chalk from 'chalk';
const log = console.log;

const program = new Command();

program
    .addOption(new Option('-a, --all', 'Get info for the available snacks'))
    .addOption(new Option('-i, --info-snack <name>', 'Get info for the selected snack'))
    .addOption(new Option('-c, --create-snack <name>', 'Create the scaffolding for a new snack'))
    .addOption(new Option('-d, --difficulty <difficulty>', 'Select snack difficulty').choices(['easy', 'e', 'medium', 'm', 'hard', 'h']).preset('easy'))
    .addOption(new Option('-h, --help', 'Get info about this repository'));

program
    .configureOutput({
        outputError: (str, write) => write(chalk.red(str))
    });

program.parse(process.argv);

const options = program.opts();
if (options.all) {
    const difficulty = difficultyExpand(options.difficulty ?? 'easy');
    log(chalk.blue(`Getting a list of all ${difficulty} snacks...`));
    await listAllSnacks(difficulty);
}
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
            log(chalk.red(`Cannot find a snack named ${options.infoSnack} for the selected difficulty level (${difficulty})`));
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
    log(chalk.blue(`Check the ./README.md file to find how to start your training!`));
}