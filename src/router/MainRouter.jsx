
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [

        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addBook",
          element: <AddBook></AddBook> ,
        },
        {
          path: "/allBooks",
          element: <AllBooks></AllBooks>,
        },
        {
          path: "/borrowedBooks",
          element: <BorrowedBooks></BorrowedBooks>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },


      ],
    },
  ]);


  export default router