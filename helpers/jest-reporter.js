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
                    const matcherResult = detail.matcherResult;
                    const expected = chalk.green(JSON.stringify(matcherResult.expected));
                    const actual = chalk.red(JSON.stringify(matcherResult.actual));
                    reasons += `Expected: ${expected}\nReceived: ${actual}\nFailing to assert ${expected} ${matcherResult.name} ${actual}\n`;
                });

                let message = `${result.title} ${result.status.toUpperCase()} \n`;

                if (result.status === "failed") {
                    message = chalk.bgRed.bold(message);
                } else {
                    message = chalk.bgGreen.bold.white(message);
                }

                return `${message}${reasons}`;
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
            log(chalk.red(`Failed ${failed} test${failed > 1 ? "s" : ""}`));
        }

        if (passed) {
            const total = passed === totalTests ? "all" : passed;
            log(chalk.green(`Passed ${total} test${passed > 1 ? "s" : ""}`))
        }

        if (successPercentage < 60) {
            log(chalk.red(`${successPercentage}% of tests passed...`));
        } else if (successPercentage < 90) {
            log(chalk.yellow(`${successPercentage}% of tests passed...`));
        } else {
            log(chalk.green(`${successPercentage}% of tests passed...`));
        }

    }
}