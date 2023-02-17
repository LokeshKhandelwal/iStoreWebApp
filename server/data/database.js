import mongoose from "mongoose";


export const connectDB = async () => {
   try {
      const { connection } = await mongoose.connect(process.env.MONGO_URI, {
         dbName: "iStore"
      });
      console.log(`Server Connected to Databse ${connection.host}`);
   } catch (error) {
      console.log("Some Error Occured", error);
      process.exit(1);
   }
}