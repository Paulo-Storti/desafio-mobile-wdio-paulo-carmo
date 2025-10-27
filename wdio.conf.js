const path = require('path');

exports.config = {
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
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

    beforeSuite: function () {
        if (global.gc) global.gc();
    },

    afterTest: async function (test, context, { error, passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
        if (global.gc) global.gc();
    },
};
