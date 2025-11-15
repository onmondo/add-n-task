import express, { Request, Response } from 'express';
import addNTaskController from './controller/addNTask.controller';
import 'dotenv/config';
import { Pool } from 'pg';

const app = express();
const PORT = 3000;

app.get('/', async (_req: Request, res: Response) => {
  // plain string response are treated as HTML document content type
  res.send('Add N Task up and running...');
});

app.use(express.json());

// mount router to app
app.use('/api/v1', addNTaskController);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});