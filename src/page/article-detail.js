import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import './../scss/article-detail.scss';
import { fetchChapter } from './../redux/reducer/chapterSlice';
import { axiosGetWithParams } from '../service/axios-api';

const ArticleDetail = () => {
  const [data, setData] = useState([]);
  const [chapterIndex, setChapterIndex] = useState('');
  const { bookId } = useParams();
  const chapter = useSelector((state) => state.chapter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChapter(bookId));
  });

  const displayConditions = (chapter) => {
    if (chapter != chapterIndex) {
      setChapterIndex(chapter);
      return <div>{chapter}</div>;
    }
  };

  const mapData = () => {
    return chapter.map((element) => {
      return (
        <Link to={``} key={element.chapterId}>
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
