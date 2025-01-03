import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
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
    ],
  },
]);

export default router;
