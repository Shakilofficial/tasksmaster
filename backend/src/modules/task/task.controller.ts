import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { taskServices } from './task.service';

const createTask = catchAsync(async (req, res) => {
  const result = await taskServices.createTask(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Task created successfully ✅',
    data: result,
  });
});

const updateTask = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await taskServices.updateTask(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task updated successfully 🔄',
    data: result,
  });
});

const deleteTask = catchAsync(async (req, res) => {
  const id = req.params.id;
  await taskServices.deleteTask(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task deleted successfully 🗑️',
    data: null,
  });
});

const getSingleTask = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await taskServices.getSingleTask(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task retrived successfully 📤',
    data: result,
  });
});

const getAllTasks = catchAsync(async (req, res) => {
  const result = await taskServices.getAllTasks(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Tasks retrived successfully ☑️',
    meta: result.meta,
    data: result.result,
  });
});

// Export all task controllers
export const taskControllers = {
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
  getAllTasks,
};
