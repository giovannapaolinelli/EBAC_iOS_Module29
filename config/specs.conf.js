require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/**/login.spec.js'
    ],
} :{
    specs: [
        './test/specs/**/addProduct.spec.js',
        './test/specs/search.spec.js',
        './test/specs/product.spec.js'
    ]
}

module.exports = { specsConf }