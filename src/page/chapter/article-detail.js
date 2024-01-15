import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import './../../scss/chapter/article-detail.scss';
import { fetchChapter } from './../../redux/reducer/chapterSlice';
import { baseURL } from './../../service/axios-api';

const ArticleDetail = () => {
  const { bookId } = useParams();
  const chapter = useSelector((state) => state.chapter.value);
  const [time, setTime] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChapter({ bookId: bookId }));
  });

  const fetchBookData = () => {
    if (chapter.length > 0) {
      return (
        <figure>
          <img
            src={`${baseURL}/${chapter[0].book.thumbnail}`}
            alt={chapter[0].book.title}
          />
          <figcaption>{chapter[0].book.title}</figcaption>
        </figure>
      );
    }
  };

  const mapData = () => {
    return chapter.map((element) => {
      return (
        <li>
          <Link
            to={`chapter/${element.chapterIndexId}`}
            key={element.chapterIndexId}
          >
            {element.title}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className='article-detail'>
      {fetchBookData()}
      <ul className='list-chapter'>{mapData()}</ul>
    </div>
  );
};

export default ArticleDetail;
