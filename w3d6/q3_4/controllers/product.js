const productList = [
    {id: 1, product_name: 'Samsung Galaxy S22', price: 675, desc: 'Discover the latest Samsung Galaxy smartphone and explore the full line of mobile phones from Samsung. No matter your needs, theres a Galaxy made for you'},
    {id: 2, product_name: 'Apple Watch Series 7', price: 399, desc: 'Apple Watch Series 7 features the largest, most advanced display yet, breakthrough health innovations, and is the most durable Apple Watch ever'},
    {id: 3, product_name: 'Lenovo desktop', price: 1399, desc: 'Prepare to be impressed with the rich, precise visuals on a QHD (2560 x 1440) touchscreen display'},
    {id: 4, product_name: 'Phone Holder', price: 13, desc: 'Great desk accessories for office and home. A smartphone stand with perfect viewing angle for making phone calls, watching movies, viewing recipes and using facetime'},
    
]

exports.getProduct = (req,res) => {
    res.render('product', {
        products: productList, pageTitle: "Product Page"
    })
}