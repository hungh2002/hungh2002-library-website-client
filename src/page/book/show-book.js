import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './../../scss/show-book.scss';
import { fetchBook } from './../../redux/reducer/bookSlice';

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
          <div>{element.thumbnail}</div>
          <div>{element.title}</div>
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
