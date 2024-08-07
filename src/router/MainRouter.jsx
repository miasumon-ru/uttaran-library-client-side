
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../pages/Update";
import SpecificCategories from "../pages/SpecificCategories";
import Details from "../pages/Details";

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
        element: <PrivateRoutes>
          <AddBook></AddBook>
        </PrivateRoutes>,
      },
      {
        path: "/allBooks",
        element: <PrivateRoutes>
          <AllBooks></AllBooks>
        </PrivateRoutes>,
      },

      {
        path: "/borrowedBooks",
        element: <PrivateRoutes>
          <BorrowedBooks></BorrowedBooks>
        </PrivateRoutes>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes>
          <Update></Update>
        </PrivateRoutes>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes>
          <Details></Details>
        </PrivateRoutes>,
      },

      {
        path: "/specificCategories/:category",
        element: <SpecificCategories></SpecificCategories>
          
      
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