//const products=[];
const fs=require('fs');
const path=require('path');

const p=path.join(path.dirname(process.mainModule.filename),'data','product.json');
module.exports=class Product{
    constructor(title){
        this.title=title;
    }

    save(){
        let products=[];
        fs.readFile(p,(err,fileContent)=>{
            if(!err){
                products=JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })
        })

        
        
    }
    static fetchAll(cb){
        fs.readFile(p,(err,fileContent)=>{
            if(err)
            {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
      
    }
}