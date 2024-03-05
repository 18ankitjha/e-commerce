// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
const handler = async (req, res) =>{
    let products = await Product.find()
    let plants={}
    for(let item of products){
        if(item.title in plants){
           if( !plants[item.title].color.includes(item.color) && item.availableQty>0){
               plants[item.title].color.push(item.color)
              
           }
           if(!plants[item.title].size.includes(item.size) && item.availableQty>0){
               plants[item.title].size.push(item.size)
           }
        }else{
            plants[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){
                plants[item.title].color=[item.color]
                plants[item.title].size=[item.size]
            }
        }
    }
    console.log(plants);
    res.status(200).json({ plants})
}

export default connectDb(handler)
