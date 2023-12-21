import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchSocialNetwork } from './../redux/reducer/socialNetworkSlice';

const Footer = () => {
  
  const socialNetworkInformation = useSelector((state) => state.socialNetwork.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSocialNetwork());
  });
  
  const mapData = () => {
    return socialNetworkInformation.map((element) => {
      return (
        <a herf={element.link} key={element.socialNetwork} target="_blank" rel="noreferrer">
          <div>{element.socialNetwork}</div>
          <div>{element.link}</div>
        </a>
      );
    });
  };
  
  return (
    <div className="rounded-social-buttons">
      {mapData()}
                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fa-fw"></i></a>
                </div>
  );
}

export default Footer;