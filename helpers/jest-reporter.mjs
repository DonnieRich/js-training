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
                result.failureMessages.forEach(message => {

                    let expected = message.match(/Expected.*/);
                    let received = message.match(/Received.*/)

                    if (expected) {
                        reasons += `${expected}\n`;
                    }

                    if (received) {
                        reasons += `${received}\n`;
                    }

                });

                let message = `${result.title} ${result.status.toUpperCase()}\n`;

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
    }
}