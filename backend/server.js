import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!!!!');
})

// routes for authentication-> we will create a middleware for this, so that we can use it in any route

app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});