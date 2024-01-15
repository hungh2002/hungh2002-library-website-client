import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './../scss/App.scss';
import NavigationBar from './../component/NavigationBar';
import Footer from './../component/Footer';

function App() {
  const theme = useSelector((state) => state.theme.value);

  document.body.style.backgroundColor = theme.css.backgroundColor;
  document.body.style.color = theme.css.color;

  return (
    <div className='App flex-container'>
      <header className='App-header'>
        <NavigationBar />
      </header>

      <section className='content'>
        <Outlet />
      </section>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
