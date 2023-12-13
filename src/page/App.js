import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import './../scss/App.scss';
import { Counter } from "./../component/Counter";
import NavigationBar from "./../component/NavigationBar";

function App() {
  
  const theme = useSelector((state) => state.theme.value);
  
  return (
    <div className="App" style={theme.css}>
      <header className="App-header">
        <NavigationBar />
      </header>
      
      <section>
        <Outlet />
        <Counter />
      </section>
      
      <footer>
      footer
      </footer>
    </div>
  );
}

export default App;
