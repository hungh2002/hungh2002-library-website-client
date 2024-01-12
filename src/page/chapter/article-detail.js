import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import './../../scss/article-detail.scss';
import { fetchChapter } from './../../redux/reducer/chapterSlice';

const ArticleDetail = () => {
  const { bookId } = useParams();
  const chapter = useSelector((state) => state.chapter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChapter(bookId));
  });

  const mapData = () => {
    return chapter.map((element) => {
      return (
        <Link to={``} key={element.chapterIndexId}>
          <div>{element.title}</div>
        </Link>
      );
    });
  };

  return (
    <div className='article-detail'>
      <div>{mapData()}</div>
    </div>
  );
};

export default ArticleDetail;
