import { defineConfig } from 'vitest/config'
import CustomReporter from './helpers/vitest-reporter.js'

export default defineConfig({
    test: {
        reporters: [new CustomReporter()]
    },
})