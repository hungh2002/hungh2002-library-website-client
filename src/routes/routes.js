import { createBrowserRouter } from "react-router-dom";

import App from "./../page/App";
import ErrorPage from "./../page/error-page";
import AddNewBook from "./../page/add-new-book";
import ShowBook from "./../page/show-book";
import EditWebsiteInformation from "./../page/edit-website-information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <ShowBook />,
      },
      {
        path: "add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "edit-website-information",
        element: <EditWebsiteInformation />,
      },
    ],
  },
]);

export default router;