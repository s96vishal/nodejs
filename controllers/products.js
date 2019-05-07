const Product=require('../models/product');

exports.getAddProduct=(req,res)=>{
    res.render('admin/add-product',{path:'/admin/add-product',pageTitle:'Add-Product'})};


exports.postAddProduct=(req,res)=>{
    const product=new Product(req.body.title);
    product.save();
    
   
    res.redirect('/');

};

exports.getProduct=(req,res)=>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{prods:products,pageTitle:'My Shop',path:'/shop'});
    });
     
}

exports.getProductList=(req,res)=>{
    Product.fetchAll((products)=>{
        res.render('shop/products',{prods:products,pageTitle:'Products',path:'/products'});
    });
}
exports.getCart=(req,res)=>{
    Product.fetchAll((products)=>{
        res.render('shop/cart',{prods:products,pageTitle:'My Cart',path:'/cart'});
    });
}
exports.getCheckout=(req,res)=>{
    Product.fetchAll((products)=>{
        res.render('shop/checkout',{prods:products,pageTitle:'Checkout',path:'/checkout'});
    });
}