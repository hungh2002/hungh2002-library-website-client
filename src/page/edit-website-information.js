import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchSocialNetwork } from './../redux/reducer/socialNetworkSlice';
import { axiosPost } from './../service/axios-api';

const EditWebsiteInformation = () => {
  
  const socialNetworkInformation = useSelector((state) => state.socialNetwork.value);
  const dispatch = useDispatch();
  
  const [data, setData] = useState('facebook');
  
  useEffect(() => {
    dispatch(fetchSocialNetwork());
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const object = {
      socialNetwork: formData.get('socialNetwork'),
      link: formData.get(formData.get('socialNetwork'))
    };
    return await axiosPost('/social-network-information', object);
  };
  
  const mapData = () => {
    return socialNetworkInformation.map((element) => {
      return (
        <label key={element.socialNetwork}> 
            {element.socialNetwork}:<input type="text" name={element.socialNetwork} defaultValue={element.link} />
          </label>
      );
    });
  };
  
  return (
    <div className="edit-website-information">
      <form onSubmit={handleSubmit}>
        <label>
          <select 
          name="socialNetwork" 
          onChange={e => setData(e.target.value)} 
          value={data}>
            <option value="facebook">facebook</option>
            <option value="x">x</option>
          </select>:
          <input type="text" name={data}/>
        </label>
        {mapData()}
        <br />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default EditWebsiteInformation;