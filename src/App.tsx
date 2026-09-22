import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="nav">
        <div className="nav-a">
          <h1>LOCALHUB</h1>
        </div>
        <div className="nav-b">
          <p>Home</p>
          <p>Create New Buisness</p>
        </div>
      </div>
      <Home></Home>

      <div className="footer"></div>
    </>
  );
}

export default App;
