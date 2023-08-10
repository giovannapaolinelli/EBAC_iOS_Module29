class CartScreen {

    get #cartIcon(){
        return $(`-ios predicate string: name == "1" AND type == "XCUIElementTypeButton" `)
    }

    get #cartList(){
        return $(`-ios predicate string: name CONTAINS 'R$'`)
    }

    async goToCart(){
        await this.#cartIcon.waitForEnabled({ timeout: 10000 })
        await this.#cartIcon.click()
    }

    async cartList(){
        await this.#cartList.waitForDisplayed({ timeout: 100000 })
        return await this.#cartList
    }

    async product(name){
        await $(`-ios predicate string:name CONTAINS '${name}'`).waitForDisplayed({ timeout: 100000 })
        return await $(`-ios predicate string:name CONTAINS '${name}'`)
    }

}

module.exports = new CartScreen()