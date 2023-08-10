const cartScreen = require("../screens/cart.screen")
const productScreen = require("../screens/product.screen")
const productViewScreen = require("../screens/productView.screen")

describe('Add Product to Cart', () => {

    it('shoud add product to cart', async () => {
        let product = 'Ingrid Running'
        await productViewScreen.addProduct(product)
        await productScreen.addToCart()
        await productScreen.selectSize("S")
        await productScreen.selectColor("Orange")
        await productScreen.addToCart()
        await cartScreen.goToCart()
        expect(await cartScreen.cartList()).toBeElementsArrayOfSize(1)
        expect(await cartScreen.product(product)).toExist()
        expect(await cartScreen.product(product)).toHaveTextContaining('Ingrid Running Jacket Size: S; Color: Orange Em estoque R$ 84.00 1')
    })
})