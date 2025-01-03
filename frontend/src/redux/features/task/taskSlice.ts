import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Fix login bug",
      description:
        "The login functionality is not working for users with special characters in their usernames. Fix the bug so that users can login successfully regardless of their username characters.",
      priority: "high",
      dueDate: "2023-01-06T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Implement new search feature",
      description:
        "Add a new search functionality to the application that allows users to search for specific data points. The search should be able to filter by different criteria and return relevant results.",
      priority: "medium",
      dueDate: "2023-01-13T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "3",
      title: "Update documentation for API",
      description:
        "The API documentation is outdated and needs to be updated to reflect the latest changes made to the API. Update the documentation to include new endpoints, parameters, and response formats.",
      priority: "low",
      dueDate: "2023-01-20T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "4",
      title: "Design new user interface for mobile app",
      description:
        "Create a new user interface design for the mobile app that is more user-friendly and intuitive. The design should be responsive and work well on different screen sizes.",
      priority: "medium",
      dueDate: "2023-01-27T00:00:00.000Z",
      isCompleted: false,
    },
    {
      id: "5",
      title: "Write unit tests for core functionality",
      description:
        "Write unit tests for the core functionalities of the application to ensure that they are working as expected. Unit tests will help to catch bugs early in the development process.",
      priority: "high",
      dueDate: "2023-02-03T00:00:00.000Z",
      isCompleted: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
