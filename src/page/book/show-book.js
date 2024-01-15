import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './../../scss/book/show-book.scss';
import { fetchBook } from './../../redux/reducer/bookSlice';
import { baseURL } from './../../service/axios-api';

const ShowBook = () => {
  const book = useSelector((state) => state.book.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  });

  const mapData = () => {
    return book.map((element) => {
      return (
        <Link to={`article-detail/${element.bookId}`} key={element.bookId}>
          <figure>
            <img src={`${baseURL}/${element.thumbnail}`} alt={element.title} />
            <figcaption>{element.title}</figcaption>
          </figure>
        </Link>
      );
    });
  };

  return (
    <div className='show-book'>
      <div className='items'>{mapData()}</div>
    </div>
  );
};

export default ShowBook;
