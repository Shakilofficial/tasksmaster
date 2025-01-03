import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

// Middlewares
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5173'] }));
app.use(express.json());

// Routes

app.get('/', (req, res) => {
  res.send('Task Manager server is up and running!');
});

// Global error handler

// Not Found handler

export default app;
