import chalk from 'chalk';
const log = console.log;

export default class CustomReporterWrapper {

    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunStart(runResults, runConfig) {
        let startingMessage = "\nStarting tests";

        if (this._globalConfig.testNamePattern !== '') {
            startingMessage += ` for ${this._globalConfig.testNamePattern}`;
        } else {
            startingMessage += "...";
        }
        log(chalk.blue(startingMessage));
    }

    onTestResult(testRunConfig, testResults, runResults) {
        let results = [];

        if (!testResults.skipped) {
            results = testResults.testResults.map(result => {
                let reasons = "";

                result.failureDetails.forEach(detail => {
                    if (Object.keys(detail).length > 0) {
                        const matcherResult = detail.matcherResult;
                        const expected = chalk.green(JSON.stringify(matcherResult.expected));
                        const actual = chalk.rgb(219, 88, 86)(JSON.stringify(matcherResult.actual));
                        reasons += ` Expected: ${expected}\n Received: ${actual}\n Failing to assert ${expected} ${matcherResult.name} ${actual}\n`;
                    }
                });

                const re = new RegExp(`${process.cwd().replace(/\\/g, "\\$&")}\\\\`, "g");
                result.failureMessages.forEach(message => {
                    const string = message.split('\n').filter((m, i) => i <= 1).map(m => ` ${m.replace(re, '')} `).join('\n');
                    reasons += `${string}\n` //chalk.bgRgb(255, 150, 79).black(`${string}\n`);
                })

                let message = ` ${result.title} ${result.status.toUpperCase()} `;

                if (result.status === "failed") {
                    message = `${chalk.bgRgb(219, 88, 86).bold.black(message)} ❌`;
                } else {
                    message = `${chalk.bgGreen.bold.black(message)} ✅`;
                }

                return `${message}\n${reasons}`;
            });
        }

        results.forEach(result => {

            log(chalk.italic(result))
        })
    }

    onRunComplete(test, runResults) {
        const totalTests = runResults.numFailedTests + runResults.numPassedTests;
        const failed = runResults.numFailedTests;
        const passed = runResults.numPassedTests;
        const successPercentage = Math.round((passed / totalTests) * 100);

        if (failed) {
            log(chalk.rgb(219, 88, 86)(`Failed ${failed} test${failed > 1 ? "s" : ""}`));
        }

        if (passed) {
            const total = passed === totalTests ? "all" : passed;
            log(chalk.green(`Passed ${total} test${passed > 1 ? "s" : ""}`))
        }

        if (successPercentage < 60) {
            log(chalk.rgb(219, 88, 86)(`${successPercentage}% of tests passed...`));
        } else if (successPercentage < 90) {
            log(chalk.rgb(255, 150, 79)(`${successPercentage}% of tests passed...`));
        } else {
            log(chalk.green(`${successPercentage}% of tests passed...`));
        }

    }
}