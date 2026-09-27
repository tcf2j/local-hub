import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*const [formError, setFormError] = useState(null);*/
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  /*
  const handleSubmit = () => {
    console.log("here");
  };*/

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();
  {
    /* console.log(session);*/
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);

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
    <div className="page signup">
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up to LocalHub today!</h2>
        <p>
          Already have an account? <Link to="/signin">Sign in!</Link>
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
          <button className="mt-6 w-full">Sign up</button>
          {error && <p className="text-red-600 text-center pt-4"></p>}
        </div>
      </form>
    </div>
  );
}

export default Signup;
