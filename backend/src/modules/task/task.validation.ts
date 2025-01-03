import { z } from 'zod';
import { Priority } from './task.constant';

const createTaskValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    description: z.string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    }),
    priority: z.enum([...Priority] as [string, ...string[]]),
    dueDate: z.string(),
  }),
});

const updateTaskValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    priority: z.enum([...Priority] as [string, ...string[]]).optional(),
    dueDate: z.string().optional(),
  }),
});

export const taskValidations = {
  createTaskValidationSchema,
  updateTaskValidationSchema,
};
