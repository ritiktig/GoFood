const express =require('express')
const router =express.router()
const Order =require('../models/Orders')
router.post('/OrderData',async (req,res) =>{
    let data =req.body.order.order_data
    await data.splice(0,0,{ Order_date:req.body.order_data})

    let eId =await order.findOne({ 'email':req.body.email})
    console.log(eId)
    if(eId === null){
        try{
                await Order.create({
                    email:req.body.email,
                    order_data:[data]
                }).then(()=>{
                    res.json({sucess: true})
                })
        } catch (error){
                console.log(error.message)
                res.send("Server Error",error.message)
        }
    }
   
})