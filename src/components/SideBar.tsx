import React from "react";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function SideBar() {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  {
    /*console.log(session);*/
  }

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
    <div className="bg-blue-500 h-screen w-fit p-4 m-auto">
      <h1 className="text-5xl font-bold pb-1">LocalHub</h1>
      <div className="side-menu">
        <MenuItem name="Dashboard" />
        <MenuItem name="Messages" />
        <MenuItem name="My Projects" />
        <MenuItem name="My Tasks" />
        <MenuItem name="Friends" />
        <MenuItem name="Calendar" />
      </div>
      <div className=" flex bg-green-300 h-20 w-full p-1 items-center justify-center border border-gray-800 rounded-sm">
        <>FRIENDS ONLINE 🙂</>
      </div>
      <div className="  flex bg-teal-100 h-50 w-full p-1  items-center justify-center border border-gray-800 rounded-sm">
        <>MESSAGE PREVIEW 🍻</>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="hover:cursor-pointer bg-amber-300 border rounded-sm inline-block h-full w-full"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
