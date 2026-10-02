import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*const [formError, setFormError] = useState(null);*/
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  /*
  const handleSubmit = () => {
    console.log("here");
  };*/

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();
  {
    /*console.log(session);*/
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);

      if (result.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("an error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page signin">
      <div className="nav text-white">
        <h1 className="font-bold">LOCALHUB</h1>
      </div>
      <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign in to LocalHub today!</h2>
        <p>
          Don't have an account? <Link to="/signup">Sign up!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 mt-6"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 mt-6"
            type="password"
          />
          <button className="mt-6 w-full">Sign In</button>
          {error && <p className="text-red-600 text-center pt-4"></p>}
        </div>
      </form>
    </div>
  );
}

export default Signin;
