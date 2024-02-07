import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import CommentRouter from './routes/commentRoutes.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', CommentRouter);


app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});