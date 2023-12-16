import { axiosPost } from "./../service/axios-api";
import "./../scss/add-new-book.scss";

const AddNewBook = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const data = {
      title: formData.get("title"),
      content: formData.get("content"),
      thumbanil: formData.get("thumbnail")
    };
    
    await axiosPost('/book', data);
  };
  
  return (
    <div className="add-new-book">
      <h3 className="title">Add new book:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title: 
          <br />
          <input type="text" name="title" />
        </label>
        <br />
        <br />
        <label>
          Content: 
          <br />
          <input type="text" name="content" />
        </label>
        <br />
        <br />
        <label>
          Thumbnail: 
          <br />
          <input type="file" name="thumbnail" />
        </label>
        <br />
        <br />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default AddNewBook;