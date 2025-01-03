import { model, Schema } from 'mongoose';
import { Priority } from './task.constant';
import { ITask } from './task.interface';

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [5, 'Title must be at least 5 characters long'],
    maxlength: [100, 'Title must be less than 100 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [5, 'Description must be at least 5 characters long'],
    maxlength: [1000, 'Description must be less than 1000 characters long'],
  },
  priority: {
    type: String,
    required: [true, 'Priority is required'],
    enum: {
      values: Priority,
      message: "Priority must be either 'low', 'medium' or 'high'",
    },
  },
  dueDate: {
    type: Date,
    required: [true, 'Due Date is required'],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export const Task = model<ITask>('Task', taskSchema);
