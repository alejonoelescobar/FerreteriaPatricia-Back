import { connectDB } from './src/database/config.js';
import server  from './src/server.js';

async function ConnectDB () {
    await connectDB();
}

server.listen(process.env.PORT, () => {
    ConnectDB();
    console.log(`The server is running on ${process.env.PORT}`);
})