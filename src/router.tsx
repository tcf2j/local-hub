import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import PrivateRoute from "./components/PrivateRoute";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Messages from "./pages/Messages";
import MyProjects from "./pages/MyProjects";
import MyTasks from "./pages/MyTasks";
import Friends from "./pages/Friends";
import Calendar from "./pages/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "messages",
        element: (
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        ),
      },
      {
        path: "myprojects",
        element: (
          <PrivateRoute>
            <MyProjects />
          </PrivateRoute>
        ),
      },
      {
        path: "mytasks",
        element: (
          <PrivateRoute>
            <MyTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "friends",
        element: (
          <PrivateRoute>
            <Friends />
          </PrivateRoute>
        ),
      },
      {
        path: "calendar",
        element: (
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        ),
      },
      { path: "create", element: <Create /> },
    ],
  },
  { path: "signup", element: <Signup /> },
  { path: "signin", element: <Signin /> },
]);
