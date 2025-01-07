export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  assignedTo: string | null;
  dueDate: string;
  isCompleted: boolean;
}

export interface IUser {
  id: string;
  name: string;
}

export const navItems = [
  { path: "/tasks", label: "Tasks" },
  { path: "/users", label: "Users" },
];
