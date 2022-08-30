import express from 'express';
import cors from 'cors';
import { tripsRouter } from './src/routers/trips-router.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

app.use('/', tripsRouter )

app.listen(PORT, () => {
  console.log("Listening in port ", PORT);
});