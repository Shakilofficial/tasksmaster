import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
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
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
