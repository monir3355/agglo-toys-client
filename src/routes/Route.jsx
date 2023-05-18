import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../components/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddToy from "../pages/AddToy";
import AllToys from "../pages/allToys/AllToys";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/mytoys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addToys",
        element: <AddToy />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
