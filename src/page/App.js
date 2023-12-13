import { Outlet } from "react-router-dom";

import './../scss/App.scss';
import { Counter } from "./../component/Counter";
import NavigationBar from "./../component/NavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <section>
        <Outlet />
        <Counter />
      </section>
    </div>
  );
}

export default App;
