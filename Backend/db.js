const mongoose = require('mongoose');
// const mongouri = "mongodb+srv://ritiktig61:7903Rks@cluster0.f93rz.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"
// const mongouri ="mongodb+srv://ritiktig61:7903Rks@cluster0.f93rz.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"
const mongouri ="mongodb://ritiktig61:7903Rks@cluster0-shard-00-00.f93rz.mongodb.net:27017,cluster0-shard-00-01.f93rz.mongodb.net:27017,cluster0-shard-00-02.f93rz.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-4fvpko-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const mongodb = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("MongoDB Connected Successfully!");
        const fetched_data =await mongoose.connection.db.collection("food_items")
      
           try{
            const data =await fetched_data.find({}).toArray();
            // to print the data to console write console.log(data)
            console.log();  
            global.food_items=data;
            // console.log(global.food_items)
            const foodCategory=await mongoose.connection.db.collection("food_category");
            const catdata=await foodCategory.find({}).toArray();
            global.food_category=catdata;
            // console.log(global.food_category)
} catch(err){
    console.error("Error feacting data:",err);
    process.exit(1);
}
    
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = mongodb;







// const mongoose = require('mongoose');
// // require('dotenv').config(); // Use .env for sensitive data
// //const mongouri ="mongodb://ritiktig61:7903Rks@cluster0-shard-00-00.f93rz.mongodb.net:27017,cluster0-shard-00-01.f93rz.mongodb.net:27017,cluster0-shard-00-02.f93rz.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-4fvpko-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
//  const mongouri = "mongodb+srv://ritiktig61:7903Rks@cluster0.f93rz.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"
// // Store this in an .env file

// // const mongodb = async () => {
// //     try {
// //         await mongoose.connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true });
// //         console.log("MongoDB Connected Successfully!");

// //         const fetched_data = await mongoose.connection.db.collection("food_items");
// //         console.log(fetched_data)

// //         try {
// //             const data = await fetched_data.find({}).toArray();
// //             console.log(); // Ensure this is printed correctly  ,we have to write data to print the data at terminal
// //         } catch (err) {
// //             console.error("Error fetching data:", err);
// //             process.exit(1);
// //         }
// //     } catch (error) {
// //         console.error("MongoDB Connection Failed:", error.message);
// //         process.exit(1);
// //     }
// // };
// // const rew=async()=>{
// //     const res=await mongoose.connect("")
// //     console.log(res);
    
// // }
// // rew();
// async function mongodb()
// {
//     try {
//         const connection= await mongoose.connect(`mongodb://ritiktig61:7903Rks@cluster0-shard-00-00.f93rz.mongodb.net:27017,cluster0-shard-00-01.f93rz.mongodb.net:27017,cluster0-shard-00-02.f93rz.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-4fvpko-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`)
//         console.log(`Database connected sucessfully ..............`)
//     } catch (error) {
//         console.log("Some error occured during conntecting..............",error.message);
//     }
// }
// mongodb();
// module.exports = mongodb; 
