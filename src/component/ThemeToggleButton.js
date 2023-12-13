import { useSelector, useDispatch } from 'react-redux';

import './../scss/ThemeToggleButton.scss';
import { DARK, LIGHT } from "./../redux/type";
import { dark, light } from "./../redux/reducer/themeSlice";

const ThemeToggleButton = () => {
  
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  
  const changeTheme = () => {
    if (theme === DARK) {
      dispatch(light());
    } else {
      dispatch(dark());
    }
  };
  
  return (
    <div id="ThemeToggleButton">
    <h4>Theme:</h4>
      <input type="checkbox" className="checkbox" id="checkbox" onClick={changeTheme} />
  <label for="checkbox" className="checkbox-label">
    <i className="fas fa-moon"></i>
    <i className="fas fa-sun"></i>
    <span className="ball"></span>
  </label>
    </div>
  );
};

export default ThemeToggleButton;