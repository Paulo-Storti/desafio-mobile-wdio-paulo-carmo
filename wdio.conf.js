import path from 'path'
import allure from '@wdio/allure-reporter'
import fs from 'fs'
import WDIOHTMLReporter from 'wdio-html-nice-reporter'

if (WDIOHTMLReporter && WDIOHTMLReporter.prototype) {
    const origAddTest = WDIOHTMLReporter.prototype.addTest
    WDIOHTMLReporter.prototype.addTest = function (test) {
        if (test.output && Array.isArray(test.output)) {
            test.output = test.output.map(o =>
                typeof o === 'string'
                    ? o.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
                    : o
            )
        }
        return origAddTest.call(this, test)
    }
}

export const config = {
    runner: 'local',
    port: 1991,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:udid': 'emulator-5554',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve('./app/android/android.wdio.native.app.v1.0.8.apk'),
        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:newCommandTimeout': 120
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            command: 'appium',
            args: {
                address: '127.0.0.1',
                port: 1991,
                relaxedSecurity: true
            }
        }]
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }],
        ['html-nice', {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Mobile Automation Report',
            linkScreenshots: true,
            showInBrowser: false,
            collapseTests: false,
            removeOutput: true,
            useOnComplete: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },
    beforeSuite: function () {
        if (global.gc) global.gc()
    },
    afterTest: async function (test, context, { passed }) {
        const screenshotsDir = path.resolve('./reports/html-reports/screenshots/')
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true })
        }

        const filename = `${test.parent.replace(/\s+/g, '_')}_${test.title.replace(/\s+/g, '_')}_${passed ? 'PASS' : 'FAIL'}.png`
        const filepath = path.join(screenshotsDir, filename)

        await browser.saveScreenshot(filepath)

        allure.addAttachment(
            passed ? 'Screenshot (Success)' : 'Screenshot (Failure)',
            fs.readFileSync(filepath),
            'image/png'
        )

        const relativePath = `./screenshots/${filename}`
        process.emit('test:log', {
            message: `<img src="${relativePath}" alt="screenshot" width="400" style="border:1px solid #ccc;border-radius:8px;margin-top:6px"/>`
        })
    }
}
