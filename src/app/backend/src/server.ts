import dotenv from 'dotenv';
dotenv.config();
process.env.MONGO_URI;

import express from 'express';
import cors from 'cors';

import productRouter from '../routers/product.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
//localhost:4200
//localhost:5000
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.use('/api/products', productRouter);

const port = 5000;
app.listen(port, () => {
  console.log('website served on http://localhost:' + port);
});
