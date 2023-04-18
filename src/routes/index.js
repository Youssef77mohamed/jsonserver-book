import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import BookDetails from "../pages/BookDetails";
import AdminLayout from "../layouts/AdminLayout";
import BooksList from "../pages/Admin/BooksList";
import AddBook from "../pages/Admin/AddBook";
import PutBook from "../pages/Admin/PutBook";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h1 className="text-center"> 404 Not Found Page</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: "Hello About Page",
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <BooksList /> },
      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "Put-Book/:id",
        element: <PutBook/>
      }

    ],
  },
]);
