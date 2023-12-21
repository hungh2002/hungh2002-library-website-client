import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './../scss/article-detail.scss';
import { fetchChapter } from './../redux/reducer/chapterSlice';

const ArticleDetail = () => {
  
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
      return (
         <div>{chapter}</div>
      );
    }
  };
  
  const mapData = () => {
    const list = chapter.map((element) => {
      return (
        <div to={``} key={element.chapterId}>
          {displayConditions(element.chapter)}
        </div>
      );
    });
    return list;
  };
  
  return (
    <div className="article-detail">
      {mapData()}
    </div>
  );
};

export default ArticleDetail;