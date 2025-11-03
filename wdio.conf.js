import path from 'path'
import allure from '@wdio/allure-reporter'

const isIOS = process.env.PLATFORM === 'ios'

const appPath = isIOS
  ? './app/ios/ios.wdio.native.app.v1.0.8.app'
  : './app/android/android.wdio.native.app.v1.0.8.apk'

export const config = {
    runner: 'local',
    port: 1991,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,

    capabilities: [{
        platformName: isIOS ? 'iOS' : 'Android',
        'appium:deviceName': isIOS ? 'iPhone 14' : 'emulator-5554',
        'appium:automationName': isIOS ? 'XCUITest' : 'UiAutomator2',
        'appium:app': path.resolve(appPath),
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
            outputDir: './reports/html-reports',
            filename: 'evidencia.html',
            reportTitle: 'Evidência de Testes - WDIO',
            showInBrowser: false,
            collapseTests: false,
            removeOutput: true,
            useOnAfterCommandForScreenshot: true,
            showScreenshot: true,
            styleOverrides: `
                img {
                    max-width: 400px;
                    max-height: 400px;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }
            `
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

    beforeSuite: function () {
        if (global.gc) global.gc()
    },

    afterTest: async function (test) {
        try {
            const screenshot = await browser.takeScreenshot()
            allure.addAttachment(
                `Screenshot - ${test.title}`,
                Buffer.from(screenshot, 'base64'),
                'image/png'
            )

            const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
            const filepath = `./reports/screenshots/${test.title}-${timestamp}.png`
            await browser.saveScreenshot(filepath)
        } catch (err) {
            console.error('Erro ao capturar screenshot:', err.message)
        }
    }
}