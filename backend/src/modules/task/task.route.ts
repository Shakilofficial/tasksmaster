import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { taskControllers } from './task.controller';
import { taskValidations } from './task.validation';

const router = Router();

router.post(
  '/',
  validateRequest(taskValidations.createTaskValidationSchema),
  taskControllers.createTask,
);

router.patch(
  '/:id',
  validateRequest(taskValidations.updateTaskValidationSchema),
  taskControllers.updateTask,
);

router.delete('/:id', taskControllers.deleteTask);

router.get('/:id', taskControllers.getSingleTask);

router.get('/', taskControllers.getAllTasks);

export const taskRoutes = router;
