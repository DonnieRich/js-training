#! /usr/bin/env node

import { Command } from "commander";
import { translateName } from "./helpers/name-converter.mjs";
import snacks from "./helpers/snack-export.mjs";

const program = new Command();

program
    .option('-i, --info-snack <name>', 'Get info for the selected snack')
    .option('-h --help', 'To use this package you have to read the info for the snack you want to solve, add your code and then run the test for that snack');

program.parse(process.argv);

const options = program.opts();
if (options.infoSnack) {
    const snackName = translateName(options.infoSnack);
    console.log(`Getting info for: ${snackName}`);
    const snack = snacks[snackName];
    snack.info();
    console.log(`
    To test your solution for ${snackName} run the following command:
    npm run test -- ${snackName}
    `);
}
if (options.help) {
    console.log(`
    To use this package you have to read the info for the snack you want to solve, add your code and then run the test for that snack.
    For example:
        - open snacks/snack-1.mjs
        - read carefully the instructions with the input/output instructions
        - add your code in the solution function (NOTE: the function should return your solution)
        - run the corresponding test and check if your solution pass all the test cases
    `);
}