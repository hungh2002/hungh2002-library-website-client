import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchChapterDetail } from './../../redux/reducer/chapterDetailSlice';
import './../../scss/chapter/show-chapter.scss';
import { baseURL } from './../../service/axios-api';

const ShowChapter = () => {
  const { bookId, chapterIndexId } = useParams();
  const chapterDetail = useSelector((state) => state.chapterDetail.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchChapterDetail({
        bookId: bookId,
        chapterIndexId: chapterIndexId,
      })
    );
  });

  const mapData = () => {
    return chapterDetail.map((element) => {
      return <img src={`${baseURL}/${element.file}`} alt={element.file} />;
    });
  };

  return <div className='show-chapter'>{mapData()}</div>;
};

export default ShowChapter;
