import { useState } from 'react';
import { axiosPost } from './../service/axios-api';
import './../scss/add-new-book.scss';

const AddNewBook = () => {
  const [thumbnail, setThumbnail] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append('thumbnail', thumbnail);

    const post = await axiosPost('/book', formData);
    return post;
  };

  return (
    <div className='add-new-book'>
      <h3 className='title'>Add new book:</h3>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <label>
          Title:
          <br />
          <input type='text' name='title' />
        </label>
        <br />
        <br />
        <label>
          Content:
          <br />
          <input type='text' name='content' />
        </label>
        <br />
        <br />
        <label>
          Thumbnail:
          <br />
          <input
            type='file'
            name='thumbnail'
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </label>
        <br />
        <br />
        <button type='submit'>Submit form</button>
      </form>
    </div>
  );
};

export default AddNewBook;
