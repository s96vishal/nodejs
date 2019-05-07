const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoute=require('./routes/shop');
const pagenotfoundController=require('./controllers/pagenotfound');
const path=require('path');
const app=express();

app.set('view engine','pug');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoute);


app.use(pagenotfoundController.pagenotfounderror);


app.listen(3000);

