import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

// Import all of Bootstrap's JS
import "bootstrap";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
