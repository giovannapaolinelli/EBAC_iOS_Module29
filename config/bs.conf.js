require('dotenv').config()

const {generalConf} = require('./general.conf')

let capabilities = process.env.PLATFORM == 'android' ? {
    capabilities:[{
        app : `${process.env.ANDROID_APP_ID}` ,
        device : 'Samsung Galaxy Note 20',
        os_version : '10.0',
        project : 'EBAC SHOP ANDROID',
        build : '1',
        name: 'teste_login' 
    }]
} : {
    capabilities:[{
        project: "Meu primeiro projeto Appium iOS BS",
        build: 'EBAC Test',
        name: 'ebac_test',
        device: 'iPhone 12 Pro',
        os_version: "14",
        'browserstack.debug': true,
        app: `${process.env.IOS_APP_ID}`
    }]
}

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ['browserstack']
}

module.exports = {bsConf}