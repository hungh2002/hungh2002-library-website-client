import { createBrowserRouter } from "react-router-dom";

import App from "./../page/App";
import ErrorPage from "./../page/error-page.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "hello",
        element: <h1>hello</h1>,
      },
    ],
  },
]);

export default router;