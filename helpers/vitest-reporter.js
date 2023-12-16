import { DefaultReporter } from 'vitest/reporters'
import chalk from 'chalk';

export default class CustomReporter extends DefaultReporter {

    onCollected() {
        // declared here just to remove the default final tree tests views
    }

    onFinished(files, errors) {
        const re = new RegExp(`${process.cwd().replace(/\\/g, "\\$&")}\\\\`, "g");
        const ran = files.filter(file => file.mode === 'run');

        let totalTests = 0;
        let failedTests = 0;
        let passedTests = 0;

        const basicSquareChar = '\u25a0 ';
        let squareResult = '';

        ran.forEach(testRan => {
            /**
             * name: snacks/easy/reverse-string/__tests__/snack.test.js
             * tasks: [{
             *  id
             *  type
             *  name: eReverseString
             *  mode: run
             *  tasks: []
             *  result: {}
             * }]
             */
            testRan.tasks.forEach(suite => {

                totalTests = suite.tasks.length;
                suite.tasks.forEach(task => {
                    let reasons = '';
                    let message = `${task.name} ${task.result.state.toUpperCase()} `;

                    if (task.result.state === "fail") {
                        failedTests++;
                        squareResult += chalk.rgb(219, 88, 86)(basicSquareChar);
                        message = ` ${chalk.bgRgb(219, 88, 86).bold.black(message)} ❌`;
                    } else {
                        passedTests++;
                        squareResult += chalk.green(basicSquareChar);
                        message = ` ${chalk.bgGreen.bold.black(message)} ✅`;
                    }

                    task.result.errors?.forEach(error => {

                        if (error.name === 'AssertionError') {
                            const expected = chalk.green(JSON.stringify(error.expected));
                            const actual = chalk.rgb(219, 88, 86)(JSON.stringify(error.actual));
                            reasons += ` Expected: ${expected}\n Received: ${actual}\n Failing to assert ${expected} ${error.operator} ${actual}\n`;
                        } else {
                            const string = error.stack.split('\n').filter((m, i) => i <= 1).map(m => ` ${m.replace(re, '')} `).join('\n');
                            reasons += `${string}\n`;
                        }

                    })
                    console.log(`${message}\n${reasons}`);
                })
            })
        });

        const successPercentage = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;

        if (failedTests) {
            console.log(chalk.red(`Failed ${failedTests} test${failedTests > 1 ? "s" : ""}`));
        }

        if (passedTests) {
            const total = passedTests === totalTests ? "all" : passedTests;
            console.log(chalk.green(`Passed ${total} test${passedTests > 1 ? "s" : ""}`))
        }

        if (successPercentage < 60) {
            console.log(chalk.red(`${successPercentage}% of tests passed...`));
        } else if (successPercentage < 90) {
            console.log(chalk.yellow(`${successPercentage}% of tests passed...`));
        } else {
            console.log(chalk.green(`${successPercentage}% of tests passed...`));
        }
        console.log(squareResult);
    }

    onUserConsoleLog(log) {
        console.log(chalk.italic(log.content));
    }
}