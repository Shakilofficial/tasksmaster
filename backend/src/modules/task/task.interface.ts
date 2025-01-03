export type TPriority = 'low' | 'medium' | 'high';

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: TPriority;
  dueDate: Date;
  isCompleted: boolean;
}
