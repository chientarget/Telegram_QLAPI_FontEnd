import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/database';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

app.use(cors()); // Thêm dòng này
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3322;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
