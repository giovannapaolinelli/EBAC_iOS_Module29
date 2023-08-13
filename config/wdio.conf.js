const{localConf} = require('./local.conf')

require('dotenv').config()

function getConfig(){
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf    
        case 'browserstack':
            return {}
        case 'saucelabs':
            return {}
    }
}

exports.config = getConfig()