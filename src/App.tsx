import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />
    </>
    /*}
      <BrowserRouter>
        <div className="nav">
          <div className="nav-a">
            <h1>LOCALHUB</h1>
          </div>
          <div className="nav-b">
            <Link to="/">Home</Link>
            <Link to="create">Create New Buisness</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>

      {/* Add footer later 
      <div className="footer"></div>
      <
      */
  );
}

export default App;
