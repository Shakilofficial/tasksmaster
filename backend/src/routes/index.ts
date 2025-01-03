import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/tasks',
    route: tasksRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
