import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Fix login bug",
      description:
        "The login functionality is not working for users with special characters in their usernames. Fix the bug so that users can login successfully regardless of their username characters.",
      priority: "high",
      assignedTo: "null",
      dueDate: "2023-01-06T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Implement new search feature",
      description:
        "Add a new search functionality to the application that allows users to search for specific data points. The search should be able to filter by different criteria and return relevant results.",
      priority: "medium",
      assignedTo: "null",
      dueDate: "2023-01-13T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "3",
      title: "Update documentation for API",
      description:
        "The API documentation is outdated and needs to be updated to reflect the latest changes made to the API. Update the documentation to include new endpoints, parameters, and response formats.",
      priority: "low",
      assignedTo: "null",
      dueDate: "2023-01-20T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "4",
      title: "Design new user interface for mobile app",
      description:
        "Create a new user interface design for the mobile app that is more user-friendly and intuitive. The design should be responsive and work well on different screen sizes.",
      priority: "medium",
      assignedTo: "null",
      dueDate: "2023-01-27T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "5",
      title: "Write unit tests for core functionality",
      description:
        "Write unit tests for the core functionalities of the application to ensure that they are working as expected. Unit tests will help to catch bugs early in the development process.",
      priority: "low",
      assignedTo: "null",
      dueDate: "2023-02-03T00:00:00.000Z",
      isCompleted: false,
    },
  ],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "priority" | "assignedTo" | "dueDate"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<ITask> }>
    ) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const {
  addTask,
  updateTask,
  toggleCompleteState,
  deleteTask,
  updateFilter,
} = taskSlice.actions;
export default taskSlice.reducer;
