import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
