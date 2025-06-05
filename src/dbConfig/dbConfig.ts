import mongoose from "mongoose";

export async function connect() {
    try {
        // Since we're using TypeScript, it's not guaranteed that MONGO_URL will always be defined.
        // However, we know it will be available at runtime, so we use the non-null assertion operator (!).
        mongoose.connect(process.env.MONGO_URL!);
        const connection  = mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB Connected Successfully");
        })

        // The line process.exit(); is a Node.js command that tells the application to immediately terminate the process.
        connection.on('error',(err)=>{
            console.log("MongoDB Connection Error",err);
            process.exit();
        })

    } catch (error) {
        console.log("Error connecting MongoDB");
        console.log(error);
    }
}