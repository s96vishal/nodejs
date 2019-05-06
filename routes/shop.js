const express=require('express');
const router=express.Router();
const path=require('path');
const adminData=require('./admin');
const rootDir=require('../util/path');


router.get('/',(req,res)=>{
    
    const products=adminData.products
     res.render('shop',{prods:products,docTitle:'My Shop'});;
});



module.exports=router;