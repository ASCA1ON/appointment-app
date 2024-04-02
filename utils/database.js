import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async ()=>{
    // mongoose.set('strictQuery', true)

    if(isConnected){
        // console.log('Db is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'dataneuron',
            // useNewUrlParser:true,
            // useUnifiedTopology:true
        })
        isConnected=true
        // console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}