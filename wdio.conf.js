import path from 'path'
import allure from '@wdio/allure-reporter'

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
        [
            'html-nice',
            {
                outputDir: './reports/html-reports',
                filename: 'evidencia.html',
                reportTitle: 'Evidência de Testes - WDIO',
                showInBrowser: false,
                collapseTests: false,
                removeOutput: true,
                useOnAfterCommandForScreenshot: true,
                showScreenshot: true
            }
        ]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

    beforeSuite: function () {
        if (global.gc) global.gc()
    },

    afterTest: async function (test) {
        const screenshot = await browser.takeScreenshot()
        allure.addAttachment(
            `Screenshot - ${test.title}`,
            Buffer.from(screenshot, 'base64'),
            'image/png'
        )

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const filepath = `./reports/screenshots/${test.title}-${timestamp}.png`
        await browser.saveScreenshot(filepath)
    }
}