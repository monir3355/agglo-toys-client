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
import Update from "../pages/mytoys/Update";
import Blogs from "../pages/Blogs";

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
        loader: () => fetch("https://agglo-toys-server.vercel.app/toys"),
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
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
          fetch(`https://agglo-toys-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://agglo-toys-server.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
