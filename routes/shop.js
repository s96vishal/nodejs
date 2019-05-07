const express=require('express');
const router=express.Router();
const path=require('path');
const productController=require('../controllers/products');


router.get('/',productController.getProduct);
router.get('/products',productController.getProductList);
router.get('/cart',productController.getCart);
router.get('/checkout',productController.getCheckout);


module.exports=router;