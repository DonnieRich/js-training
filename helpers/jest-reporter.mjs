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
        // console.log("#########################");
        // console.log(testResults);
        // console.log("#########################");

        let results = [];

        if (!testResults.skipped) {
            results = testResults.testResults.map(result => {

                const reasons = [];
                result.failureMessages.forEach(message => {

                    let expected = message.match(/Expected.*/);
                    let received = message.match(/Received.*/)

                    if (expected) {
                        reasons.push(`${expected}`);
                    }

                    if (received) {
                        reasons.push(`${received}`);
                    }

                });
                return `\n${chalk.bgRed.bold(result.title)} ${result.status}:\n${reasons.join('\n')}\n`;
            });
        }

        results.forEach(result => {

            log(chalk.italic(result))
        })
    }

    onRunComplete(test, runResults) {
    }
}