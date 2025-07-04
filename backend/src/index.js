import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'; // Fix typo
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/socket.js';

dotenv.config();

const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
 origin: "https://chatapp-frontend-gep4.onrender.com",
  credentials: true, // Allow cookies to be sent
}));


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



server.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
  connectDB()
});
