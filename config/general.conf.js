const { hooksConf } = require("./hooks.conf")

let generalConf = {
    path: '/wd/hub',
    framework: 'mocha',
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    maxInstances: 1,
    ...hooksConf,
    ...reportsConf
} 
module.exports = { generalConf }