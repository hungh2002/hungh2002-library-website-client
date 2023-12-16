import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeSocialNetwork } from "./../redux/reducer/socialNetworkSlice";

const EditWebsiteInformation = () => {
  
  const [data, setData] = useState({});
  
  const socialNetwork = useSelector((state) => state.socialNetwork.value);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const key = Object.keys(socialNetwork);
    const map = key.forEach((element) => {
        data[`${element}`] = formData.get(element);
    });
    
    dispatch(changeSocialNetwork(data));
  };
  
  const form = () => {

    const map = Object.entries(socialNetwork).map((element) => {
      return (
          <label key={element[0]}> 
            {element[0]}:<input type="text" name={element[0]} defaultValue={element[1]} />
          </label>
      );
    });
    
    return map;
  };
  
  return (
    <div className="edit-website-information">
      <form onSubmit={handleSubmit}>
        {form()}
        <br />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default EditWebsiteInformation;