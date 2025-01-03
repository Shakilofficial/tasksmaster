import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import sendResponse from './utils/sendResponse';

const app: Application = express();

// Middlewares
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5173'] }));
app.use(express.json());

// Routes

app.get('/', (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: '🌐 Taskmaster Server is live 🚀',
    data: null,
  });
});

// Test route
app.get('/test', (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test route is working 🚀 ',
    data: null,
  });
});

// Global error handler
app.use(globalErrorHandler);

// Not Found handler
app.use(notFound);

export default app;
