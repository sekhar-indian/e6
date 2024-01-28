// const product=[];
// module.exports=class Product{
//     constructor(t){
//         this.title=t;
//     }
//     save(){
//         product.push(this.title);
//     }
//    static fetchAll() {
//     return product;
//    }
// }
const fs=require('fs');
const path=require('path');

const product=[];
module.exports=class Product{
    constructor(t){
        this.title=t;
    }
    save(){
        // product.push(this.title);
        const p=path.join( path.dirname(process.mainModule.filename),
        'data',
        'products.json'
        );
        fs.readFile(p,(err, fileContent)=>{
            
        } );
    }
   static fetchAll() {
    return product;
   }
}
