class ProductScreen {

    get #addToCart(){
        return $(`~Adicionar ao carrinho`)
    }

    get #selectSize(){
        return $(`-ios predicate string: name CONTAINS 'Size'`)
    }

    get #selectColor(){
        return $(`-ios predicate string: name CONTAINS 'Color'`)
    }

    async addToCart(){
        await this.#addToCart.waitForEnabled({ timeout: 10000 })
        await this.#addToCart.click()
    }

    async selectSize(size){
        await this.#selectSize.waitForEnabled({ timeout: 10000 })
        await this.#selectSize.click()
        await $(`~${size}`).waitForEnabled({ timeout: 10000 })
        await $(`~${size}`).click()
    }

    async selectColor(color){
        await this.#selectColor.waitForEnabled({ timeout: 10000 })
        await this.#selectColor.click()
        await $(`~${color}`).waitForEnabled({ timeout: 10000 })
        await $(`~${color}`).click()
    }

}

module.exports = new ProductScreen()