require('dotenv').config()
const { join } = require('path')
const {generalConf} = require('./general.conf')

let capabilities = process.env.PLATFORM == 'android' ?{
    capabilities: [
        {
        "platformName": "Android",
        "platformVersion": "8.1",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        'newCommandTimeout': 240
        }
    ],
} : {
    capabilities: [
        {
            "platformName": "iOS",
            'appium:options': {
                "deviceName": "iPhone 13",
                "platformVersion": "16.2",
                "automationName": 'XCUITest',
                "orientation": "PORTRAIT",
                "app": join(process.cwd(), './app/ios/loja-ebac.app'),
                "newCommandTimeout": 240
                }
          }
        ],
}

let localconf = {
    ...generalConf,
    ...capabilities,
    hostname: 'localhost',
    port: 4723,
    services: ['appium']
}

module.exports = {localconf}