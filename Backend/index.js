// const express = require('express')

// const app = express()
// const mongodb = require("./db")
// const port = 5005
// mongodb();

// app.use(express.json());

// app.use('/api',require("./ROUTES/createuser"));

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:5173/")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-with,Content-Type,Accept"
//   );
//   next();
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongodb = require("./db");
const port = 5005;

mongodb();

app.use(express.json());

// Fix CORS issue
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/createuser', require("./ROUTES/Createuser"));
app.use('/api/display',require("./ROUTES/Displaydata"))
app.use('/api/login',require("./ROUTES/Createuser"));

// continue from here  solve this error 31/07/2025 1:0
app.use('/api/orderdata',require("./ROUTES/OrderData"))
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
