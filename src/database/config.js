import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar la base de datos: ${error.message}`);
        throw new Error(`Error al conectar la base de datos: ${error.message}`);
    }
}

export { connectDB };