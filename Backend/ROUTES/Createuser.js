// const express = require('express')
// const router =express.Router()
// const user = require('../models/User')
// const {body, validationResult} = require('express-validator');
// router.post('/createuser',[body('email').isEmail(),
//     body('password',"incorrect password").isLength({min: 5 })
// ] ,async(req,res)=>{
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors: errors.array()})
//         }

//     try{
//         await user.create({
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password,
//             location: req.body.location


//         });
//         res.json({success:true});
//     }  catch(error){
//         console.log(error)
//           res.json({success:false});
//     }
// }
   
    

// )
// module.exports = router;










const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt =require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const jwtSecret ="MynameisEndtoEndYoutubeChannel$#";
router.post('/register', [
    body('email').isEmail(),
    body('password', "Password must be at least 5 characters").isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
         const salt = await bcrypt.genSalt(10);
         const securePassword = await bcrypt.hash(req.body.password, salt);

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword,
            location: req.body.location
        });

        res.json({ success: true });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


// Login information 

router.post('/loginuser',[
    body('email').isEmail(),
    body('password', "Password must be at least 5 characters").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
const {email,password} =req.body;
    try {
        // const salt = await bcrypt.genSalt(10);
        // const securePassword = await bcrypt.hash(req.body.password, salt);

      let userdata =  await User.findOne({email:email})
      if(!userdata){
        return res.status(400).json({ errors: "Try loggin with correct credential "})
      }
     const pwdcompare =await bcrypt.compare(req.body.password,userdata.password)
if(!pwdcompare){
    return res.status(400).json({ errors: "Try loggin with correct credential "})
}
const data= {
    user:{
        id: userdata.id
    }
}  

const authtoken =jwt.sign(data,jwtSecret)
return res.json({success:true,authtoken: authtoken})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const { body, validationResult } = require('express-validator');
// // const bcrypt = require('bcryptjs');

// // POST route to create a user
// router.post('/createuser', async (req, res) => {
//     console.log(req.body.email);

//     // Check if there are any validation errors
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //     return res.status(400).json({ errors: errors.array() });
//     // }

//     try {
//         // Ensure email is not null or empty
//         // if (!req.body.email || req.body.email.trim() === "") {
//         //     return res.status(400).json({ success: false, error: "Email is required" });
//         // }

//         // // Check if the email already exists in the database
//         // let existingUser = await User.findOne({ email: req.body.email });
//         // if (existingUser) {
//         //     return res.status(400).json({ success: false, error: "User with this email already exists" });
//         // }

//         // Create a new user in the database
//         const a=await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password, // Ideally, hash this password before saving
//             location: req.body.location,
//         });
//         console.log(a)

//         // Respond with success
//         res.json({ success: true });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
// });

// module.exports = router;
