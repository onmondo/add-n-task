import express, { Request, Response } from 'express';
import addNTaskController from './controller/addNTask.controller';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Add N Task up and running...');
});

app.use('/api/v1', addNTaskController);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});