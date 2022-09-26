const cartItemList = [
    {product_name: 'Samsung Galaxy S22', price: 675, qty: 10},
    {product_name: 'Lenovo desktop', price: 1399, qty: 5},
    {product_name: 'Phone Holder', price: 13, qty: 3}
]

exports.getCartItems = (req,res) => {
    res.render('shoppingcart', {
        cartItems: cartItemList, pageTitle: "Shopping Cart"
    })
}