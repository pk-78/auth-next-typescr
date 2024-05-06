// import mongoose from "mongoose";

// export const connect = async () => {

//     try{ 
//         await mongoose.connect(process.env.MONGO_URI!);
//         const connection = mongoose.connection

//         connection.on('connected', ()=>{
//             console.log("Mongodb connected successfully!")
//         })

//         connection.on('error',()=>{
//             console.log("Mongodb connection error");
//             process.exit();
//         })

//     }
//     catch(error){

//         console.log("Something went wrong",error)
        

//     }
// };


import mongoose from "mongoose";

// const mongoconn = "mongodb+srv://priyanshukushwaha311:6QuOCVQMgR2jaWAA@cluster0.4zhckof.mongodb.net/"

export const connect = async () => {
    try { 
        // console.log("MongoDB URI:", mongoconn)
        const mongoURI = process.env.MONGO_URI // Asserting it as string

        await mongoose.connect(mongoURI!);
        
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully!");
        });

        connection.on('error', (error) => {
            console.error("MongoDB connection error:", error);
            process.exit(1); // Exit with error code 1
        });
    } catch(error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with error code 1
    }
};



