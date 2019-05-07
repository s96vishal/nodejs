const express=require('express');
const router=express.Router();
const path=require('path');
const productController=require('../controllers/products');


const products=[];
router.get('/add-product',productController.getAddProduct);

router.get('/products',productController.getAdminProducts);
router.post('/add-product',productController.postAddProduct);

module.exports=router;
