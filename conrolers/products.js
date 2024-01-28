const Product = require('../moduls/product');

exports.getdata1= (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

    exports.getdata2= (req, res, next) => {
    const product=new Product(req.body.title);
    product.save()
    res.redirect('/');
  }

  exports.getdata3=(req, res, next) => {
    const products =Product.fetchAll();

    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }