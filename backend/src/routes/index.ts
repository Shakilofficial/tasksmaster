import { Router } from 'express';
import { taskRoutes } from '../modules/task/task.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/tasks',
    route: taskRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
