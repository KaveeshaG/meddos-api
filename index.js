import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import studentRouter from './routes/student.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello World! '});
// });

// var userSvc = userService;

app.use('/api/v1/students', studentRouter);

const startServer = async () => {
    try {
        // connecting a database
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}

startServer();