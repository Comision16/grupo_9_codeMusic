const {loadProducts, storeProducts} = require('../data/products');

module.exports = {
    
    productDetail: (req,res) => res.render('products/productDetail'),

    productCart: (req,res) => res.render('products/productCart'),

    productAdd: (req,res) => res.render('products/productAdd'),

    productEdit: (req,res) => res.render('products/productEdit'),

    productsList: (req, res) => {
        const products = loadProducts()

        res.render('products',{
            products
    })
}



/* (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'productDetail.html')), */
/* (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'productCart.html')) */