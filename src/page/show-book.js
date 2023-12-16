import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./../scss/show-book.scss";
import { axiosGet } from "./../service/axios-api";

const ShowBook = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getData();
  });
  
  const getData = async () => {
    try {
      const response = await axiosGet('/book');
      return setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const mapData = () => {
    return data.map((element) => {
      return (
        <Link to={"article-detail"} key={element.bookId}>
          <div>{element.thumbnail}</div>
          <div>{element.title}</div>
        </Link>
      );
    });
  };
  
  return (
    <div className="show-book">
      <div className="items">
      {mapData()}
      </div>
    </div>
    );
}

export default ShowBook;