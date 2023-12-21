import { createBrowserRouter } from "react-router-dom";

import App from "./../page/App";
import ErrorPage from "./../page/error-page";
import AddNewBook from "./../page/add-new-book";
import ShowBook from "./../page/show-book";
import ArticleDetail from "./../page/article-detail";
import AddNewChapter from "./../page/add-new-chapter";
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
        path: "article-detail/:bookId",
        element: <ArticleDetail />,
      },
      {
        path: "add-new-chapter",
        element: <AddNewChapter />,
      },
      {
        path: "edit-website-information",
        element: <EditWebsiteInformation />,
      },
    ],
  },
]);

export default router;