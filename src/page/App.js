import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import './../scss/App.scss';
import NavigationBar from "./../component/NavigationBar";
import Footer from "./../component/Footer";
import {Counter} from "./../component/Counter";

function App() {
  
  const theme = useSelector((state) => state.theme.value);
  
  return (
    <div className="App flex-container" style={theme.css}>
      <header className="App-header">
        <NavigationBar />
      </header>
      
      <section className="content">
        <Outlet />
        <Counter />
      </section>
      
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
