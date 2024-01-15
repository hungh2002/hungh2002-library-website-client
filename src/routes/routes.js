import { createBrowserRouter } from 'react-router-dom';

import App from './../page/App';
import ErrorPage from './../page/error-page';
import AddNewBook from './../page/book/add-new-book';
import ShowBook from './../page/book/show-book';
import ArticleDetail from '../page/chapter/article-detail';
import AddNewChapter from './../page/chapter/add-new-chapter';
import ShowChapter from './../page/chapter/show-chapter';
import EditWebsiteInformation from './../page/edit-website-information';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <ShowBook />,
      },
      {
        path: 'add-new-book',
        element: <AddNewBook />,
      },
      {
        path: 'article-detail/:bookId',
        element: <ArticleDetail />,
      },
      {
        path: 'article-detail/:bookId/chapter/:chapterIndexId',
        element: <ShowChapter />,
      },
      {
        path: 'add-new-chapter',
        element: <AddNewChapter />,
      },
      {
        path: 'edit-website-information',
        element: <EditWebsiteInformation />,
      },
    ],
  },
]);

export default router;
