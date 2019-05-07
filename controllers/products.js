const Product=require('../models/product');

exports.getAddProduct=(req,res)=>{
    res.render('admin/add-product',{path:'/admin/add-product',pageTitle:'Add-Product'})};


exports.postAddProduct=(req,res)=>{
    const product=new Product(req.body.title);
    product.save();
    
   
    res.redirect('/');

};

exports.getAdminProducts=(req,res)=>{
    
        res.render('admin/products',{pageTitle:'Admin Products',path:'/admin/products'});

}

//User methods
exports.getProduct=(req,res)=>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{prods:products,pageTitle:'My Shop',path:'/shop'});
    });
     
}

exports.getProductList=(req,res)=>{
        res.render('shop/products',{pageTitle:'Products',path:'/products'});
}
exports.getCart=(req,res)=>{
        res.render('shop/cart',{pageTitle:'My Cart',path:'/cart'});
}
exports.getCheckout=(req,res)=>{
     res.render('shop/checkout',{pageTitle:'Checkout',path:'/checkout'});
    }