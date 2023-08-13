const { hooksConf } = require("./hooks.conf")
const { reportsConf } = require("./reports.conf")

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