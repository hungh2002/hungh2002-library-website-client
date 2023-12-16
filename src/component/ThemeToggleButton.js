import { useSelector, useDispatch } from 'react-redux';

import './../scss/ThemeToggleButton.scss';
import { dark, light } from "./../redux/reducer/themeSlice";
import { THEME } from "./../redux/type";

const ThemeToggleButton = () => {
  
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  
  const changeTheme = () => {
    if (theme === THEME.dark) {
      dispatch(light());
    } else {
      dispatch(dark());
    }
  };
  
  return (
    <div id="ThemeToggleButton">
    Theme:
      <input type="checkbox" className="checkbox" id="checkbox" onClick={changeTheme} />
  <label htmlFor="checkbox" className="checkbox-label">
    <i className="fas fa-moon"></i>
    <i className="fas fa-sun"></i>
    <span className="ball"></span>
  </label>
    </div>
  );
};

export default ThemeToggleButton;