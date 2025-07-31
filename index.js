import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createCall } from './controllers/makeCall.controller.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const callResult = await createCall();  
    res.json({
      message: 'Call initiated'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to initiate call' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
