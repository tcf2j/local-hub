import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  console.log(session);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/signUp");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <button
          onClick={handleSignOut}
          className="hover:cursor-pointer border inline-block px-4 py-3 mt-4"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
