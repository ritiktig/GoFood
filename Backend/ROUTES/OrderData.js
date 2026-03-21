// const express = require('express')
// const router = express.Router();
// const Order =require('../models/OrderSchema')
// router.post('/OrderData',async (req,res) =>{
//     let data =req.body.order_data
//     // await data.splice(0,0,{ Order_date:req.body.order_data})
//     await data.splice(0, 0, { Order_date: new Date().toString() });
//     let eId =await Order.findOne({ 'email':req.body.email})

//     console.log(eId)
//     if(eId === null){
//         try{
//                 await Order.create({
//                     email:req.body.email,
//                     order_data:[data]
//                 }).then(()=>{
//                     res.json({success: true})
//                 })
//         } catch (error){
//                 console.log(error.message)
//                 res.send("Server Error",error.message)
//         }
//     }
   

//     else {
//         try {
//             await Order.findOneAndUpdate({email: req.body.email},
//         {$push: {order_data: data}}).then(() =>{
//             res.json({succss: true})
//         })
//         } catch(error){
//             res.send("Server Error", error.message)
//         }
//     }
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const Order = require('../models/OrderSchema');

router.post('/OrderData', async (req, res) => {
    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: new Date().toString() });

    try {
        let eId = await Order.findOne({ email: req.body.email });

        if (eId === null) {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            return res.json({ success: true });
        } else {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
            return res.json({ success: true });
        }
    } catch (error) {
        console.error("Server Error:", error.message);
        return res.status(500).send("Server Error: " + error.message);
    }
});

router.post('/myOrderData', async (req, res) => {
try{
    let myData = await Order.find({"email" :req.body.email})
    res.json({orderData: myData})
} catch(error){
res.send("server Error",error.message)
}

})

module.exports = router;

