import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchBook } from './../redux/reducer/bookSlice';
import { axiosPost } from './../service/axios-api';
import './../scss/add-new-chapter.scss';

const AddNewChapter = () => {
  const book = useSelector((state) => state.book.value);
  const dispatch = useDispatch();

  const [bookId, setBookId] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(fetchBook());
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    formData.append('files', images);

    return await axiosPost('/chapter', object, id);
  };

  const mapData = () => {
    return book.map((element) => {
      return (
        <option key={element.bookId} value={element.bookId}>
          {element.thumbnail}
          {element.title}
        </option>
      );
    });
  };

  return (
    <div className='edit-website-information'>
      <form onSubmit={handleSubmit}>
        <label>
          <select
            name='bookId'
            onChange={(e) => setBookId(e.target.value)}
            value={bookId}
          >
            <option value='0'>default</option>
            {mapData()}
          </select>
        </label>
        <br />
        <label>
          chapter:
          <input type='text' name='title' />
        </label>
        <label>
          images:
          <input
            type='file'
            name='files'
            onChange={(e) => setImages(e.target.files)}
            multiple
          />
        </label>
        <br />
        <button type='submit'>Submit form</button>
      </form>
    </div>
  );
};

export default AddNewChapter;
