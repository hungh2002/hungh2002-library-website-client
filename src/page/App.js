import { Outlet } from "react-router-dom";

import './../scss/App.scss';
import { Counter } from "./../component/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        <Outlet />
        <Counter />
      </section>
    </div>
  );
}

export default App;
