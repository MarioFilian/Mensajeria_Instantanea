import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import registerRoutes from './routes/registerRoutes.js';
import { connectDB } from './config/db.js';
dotenv.config();


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/api/register', registerRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`auth-register running on port ${PORT}`);
  });
});
