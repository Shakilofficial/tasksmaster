import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../helper/errors/AppError';
import { taskSearchableFields } from './task.constant';
import { ITask } from './task.interface';
import { Task } from './task.model';

const createTask = async (payload: ITask) => {
  // Create a task
  const result = await Task.create(payload);
  return result;
};

const updateTask = async (id: string, payload: ITask) => {
  //get the task by id
  const task = await Task.findById(id);
  if (!task) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
  }
  // Update the task
  const result = await Task.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTask = async (id: string) => {
  // Get the task by id
  const task = await Task.findById(id);
  if (!task) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
  }
  // Delete the task
  await task.deleteOne();
};

const getSingleTask = async (id: string) => {
  // Get the task by id
  const task = await Task.findById(id);
  if (!task) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
  }
  return task;
};

const getAllTasks = async (query: Record<string, unknown>) => {
  // Get all tasks
  const taskQuery = new QueryBuilder(Task.find(), query)
    .search(taskSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const meta = await taskQuery.countTotal();
  const result = await taskQuery.modelQuery;
  return {
    meta,
    result,
  };
};

export const taskServices = {
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
  getAllTasks,
};
